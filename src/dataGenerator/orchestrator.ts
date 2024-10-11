import { IDataSourceConnector, ITransformationModule, IOutputFormatter } from './interfaces';
import { ErrorHandler } from './errorHandler';

/**
 * Orchestrator class for managing the data generation process.
 */
export class Orchestrator {
  private dataSource: IDataSourceConnector;
  private transformations: ITransformationModule[];
  private outputFormatter: IOutputFormatter;

  /**
   * Creates an instance of Orchestrator.
   * @param dataSource The data source connector to use.
   * @param transformations An array of transformation modules to apply.
   * @param outputFormatter The output formatter to use.
   */
  constructor(
    dataSource: IDataSourceConnector,
    transformations: ITransformationModule[],
    outputFormatter: IOutputFormatter
  ) {
    this.dataSource = dataSource;
    this.transformations = transformations;
    this.outputFormatter = outputFormatter;
  }

  /**
   * Generates data based on the provided query.
   * @param query The query to use for data generation.
   * @returns A promise that resolves to the formatted data.
   */
  async generateData(query: string): Promise<string> {
    try {
      await this.dataSource.connect();
      let data = await this.dataSource.fetchData(query);

      for (const transformation of this.transformations) {
        data = await transformation.transform(data);
      }

      const formattedData = await this.outputFormatter.format(data);
      await this.dataSource.disconnect();

      return formattedData;
    } catch (error) {
      ErrorHandler.handleError(error);
      throw error;
    }
  }
}