import { IDataSourceConnector, ITransformationModule, IOutputFormatter } from './interfaces';

/**
 * Base class for data source connectors.
 */
export abstract class BaseDataSourceConnector implements IDataSourceConnector {
  abstract connect(): Promise<void>;
  abstract fetchData(query: string): Promise<any>;
  abstract disconnect(): Promise<void>;
}

/**
 * Base class for transformation modules.
 */
export abstract class BaseTransformationModule implements ITransformationModule {
  abstract transform(data: any): Promise<any>;
}

/**
 * Base class for output formatters.
 */
export abstract class BaseOutputFormatter implements IOutputFormatter {
  abstract format(data: any): Promise<string>;
}