/**
 * Represents a data source connector.
 */
export interface IDataSourceConnector {
  connect(): Promise<void>;
  fetchData(query: string): Promise<any>;
  disconnect(): Promise<void>;
}

/**
 * Represents a data transformation module.
 */
export interface ITransformationModule {
  transform(data: any): Promise<any>;
}

/**
 * Represents an output formatter.
 */
export interface IOutputFormatter {
  format(data: any): Promise<string>;
}

/**
 * Represents a configuration for a data source connector.
 */
export interface IDataSourceConfig {
  type: 'api' | 'database' | 'filesystem';
  // Add other common configuration properties
}

/**
 * Represents a configuration for a transformation module.
 */
export interface ITransformationConfig {
  type: 'cleansing' | 'augmentation' | 'anonymization';
  // Add other common configuration properties
}

/**
 * Represents a configuration for an output formatter.
 */
export interface IOutputFormatterConfig {
  type: 'json' | 'csv' | 'xml';
  // Add other common configuration properties
}