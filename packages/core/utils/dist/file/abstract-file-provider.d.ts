import { FileTypes, IFileProvider } from "@medusajs/types";
/**
 * ### constructor
 *
 * The constructor allows you to access resources from the module's container using the first parameter,
 * and the module's options using the second parameter.
 *
 * If you're creating a client or establishing a connection with a third-party service, do it in the constructor.
 *
 * #### Example
 *
 * ```ts
 * import { Logger } from "@medusajs/framework/types"
 * import { AbstractFileProviderService } from "@medusajs/framework/utils"
 *
 * type InjectedDependencies = {
 *   logger: Logger
 * }
 *
 * type Options = {
 *   apiKey: string
 * }
 *
 * class MyFileProviderService extends AbstractFileProviderService {
 *   protected logger_: Logger
 *   protected options_: Options
 *   static identifier = "my-file"
 *   // assuming you're initializing a client
 *   protected client
 *
 *   constructor (
 *     { logger }: InjectedDependencies,
 *     options: Options
 *   ) {
 *     super()
 *
 *     this.logger_ = logger
 *     this.options_ = options
 *
 *     // assuming you're initializing a client
 *     this.client = new Client(options)
 *   }
 * }
 *
 * export default MyFileProviderService
 * ```
 */
export declare class AbstractFileProviderService implements IFileProvider {
    /**
     * Each file provider has a unique ID used to identify it. The provider's ID
     * will be stored as `fs_{identifier}_{id}`, where `{id}` is the provider's `id`
     * property in the `medusa-config.ts`.
     *
     * @example
     * class MyFileProviderService extends AbstractFileProviderService {
     *   static identifier = "my-file"
     *   // ...
     * }
     */
    static identifier: string;
    /**
     * This method validates the options of the provider set in `medusa-config.ts`.
     * Implementing this method is optional. It's useful if your provider requires custom validation.
     *
     * If the options aren't valid, throw an error.
     *
     * @param options - The provider's options.
     *
     * @example
     * class MyFileProviderService extends AbstractFileProviderService {
     *   static validateOptions(options: Record<any, any>) {
     *     if (!options.apiKey) {
     *       throw new MedusaError(
     *         MedusaError.Types.INVALID_DATA,
     *         "API key is required in the provider's options."
     *       )
     *     }
     *   }
     * }
     */
    static validateOptions(options: Record<any, any>): void | never;
    /**
     * @ignore
     */
    getIdentifier(): any;
    /**
     * This method uploads a file using your provider's custom logic.
     *
     * @param {FileTypes.ProviderUploadFileDTO} file - The file to upload
     * @returns {Promise<FileTypes.ProviderFileResultDTO>} The uploaded file's details.
     *
     * @example
     * class MyFileProviderService extends AbstractFileProviderService {
     *   // ...
     *   async upload(
     *     file: ProviderUploadFileDTO
     *   ): Promise<ProviderFileResultDTO> {
     *     // TODO upload file to third-party provider
     *     // or using custom logic
     *
     *     return {
     *       url: "some-url.com",
     *       key: "file-name"
     *     }
     *   }
     * }
     */
    upload(file: FileTypes.ProviderUploadFileDTO): Promise<FileTypes.ProviderFileResultDTO>;
    /**
     * This method deletes the file from storage.
     *
     * @param {FileTypes.ProviderDeleteFileDTO} file - The details of the file to delete.
     * @returns {Promise<void>} Resolves when the file is deleted.
     *
     * @example
     * class MyFileProviderService extends AbstractFileProviderService {
     *   // ...
     *   async delete(file: ProviderDeleteFileDTO): Promise<void> {
     *     // TODO logic to remove the file from storage
     *     // Use the `file.fileKey` to delete the file
     *     // for example:
     *     this.client.delete(file.fileKey)
     *   }
     * }
     */
    delete(file: FileTypes.ProviderDeleteFileDTO): Promise<void>;
    /**
     * This method is used to retrieve a download URL of the file. For some providers,
     * such as S3, a presigned URL indicates a temporary URL to get access to a file.
     *
     * If your provider doesn’t perform or offer a similar functionality, you can
     * return the URL to download the file.
     *
     * @param {FileTypes.ProviderGetFileDTO} fileData - The details of the file to get its
     * presigned URL.
     * @returns {Promise<string>} The file's presigned URL.
     *
     * @example
     * class MyFileProviderService extends AbstractFileProviderService {
     *   // ...
     *   async getPresignedDownloadUrl(
     *     fileData: ProviderGetFileDTO
     *   ): Promise<string> {
     *     // TODO logic to get the presigned URL
     *     // Use the `file.fileKey` to delete the file
     *     // for example:
     *     return this.client.getPresignedUrl(fileData.fileKey)
     *   }
     * }
     */
    getPresignedDownloadUrl(fileData: FileTypes.ProviderGetFileDTO): Promise<string>;
}
//# sourceMappingURL=abstract-file-provider.d.ts.map