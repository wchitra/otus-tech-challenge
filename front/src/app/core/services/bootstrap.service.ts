/**
 * Used for making calls to the API when loading the application.
 */
export interface BootstrapService {
  init(): Promise<any>;
}
