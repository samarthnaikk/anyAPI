/**
 * Core types for anyAPI automation framework
 */

/**
 * Represents a message to be sent to a target website
 */
export interface MessageInput {
  /**
   * The text content of the message to send
   */
  content: string;

  /**
   * Optional metadata or additional parameters for the message
   */
  metadata?: Record<string, unknown>;
}

/**
 * Configuration for targeting a specific website
 */
export interface TargetWebsiteConfig {
  /**
   * The URL of the target website
   */
  url: string;

  /**
   * Optional timeout in milliseconds for operations
   */
  timeout?: number;

  /**
   * Optional viewport configuration
   */
  viewport?: {
    width: number;
    height: number;
  };

  /**
   * Additional site-specific configuration
   */
  config?: Record<string, unknown>;
}

/**
 * Response from automation execution
 */
export interface AutomationResponse {
  /**
   * Indicates whether the automation was successful
   */
  success: boolean;

  /**
   * Response data from the automation
   */
  data?: unknown;

  /**
   * Error message if automation failed
   */
  error?: string;

  /**
   * Timestamp of when the response was generated
   */
  timestamp: Date;

  /**
   * Optional metadata about the automation execution
   */
  metadata?: Record<string, unknown>;
}

/**
 * Base interface for site adapters
 */
export interface SiteAdapter {
  /**
   * Name of the site adapter
   */
  name: string;

  /**
   * Send a message to the target website
   */
  sendMessage(
    message: MessageInput,
    config: TargetWebsiteConfig
  ): Promise<AutomationResponse>;
}
