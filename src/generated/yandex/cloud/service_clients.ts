import * as cloudApi from '.'
export const TextRecognitionServiceClient = cloudApi.ai.ocr_service.TextRecognitionServiceClient;
export const SttServiceClient = cloudApi.ai.stt_service.SttServiceClient;
export const TranslationServiceClient = cloudApi.ai.translate_translation_service.TranslationServiceClient;
export const SynthesizerClient = cloudApi.ai.tts_service.SynthesizerClient;
export const VisionServiceClient = cloudApi.ai.vision_service.VisionServiceClient;
export const ImageClassifierServiceClient = cloudApi.ai.vision_image_classifier_service.ImageClassifierServiceClient;
export const BackendGroupServiceClient = cloudApi.apploadbalancer.backend_group_service.BackendGroupServiceClient;
export const HttpRouterServiceClient = cloudApi.apploadbalancer.http_router_service.HttpRouterServiceClient;
export const LoadBalancerServiceClient = cloudApi.apploadbalancer.load_balancer_service.LoadBalancerServiceClient;
export const AlbTargetGroupServiceClient = cloudApi.apploadbalancer.target_group_service.TargetGroupServiceClient;
export const VirtualHostServiceClient = cloudApi.apploadbalancer.virtual_host_service.VirtualHostServiceClient;
export const BackupBackupServiceClient = cloudApi.backup.backup_service.BackupServiceClient;
export const BackupPolicyServiceClient = cloudApi.backup.policy_service.PolicyServiceClient;
export const BackupProviderServiceClient = cloudApi.backup.provider_service.ProviderServiceClient;
export const BackupResourceServiceClient = cloudApi.backup.resource_service.ResourceServiceClient;
export const BillingAccountServiceClient = cloudApi.billing.billing_account_service.BillingAccountServiceClient;
export const BudgetServiceClient = cloudApi.billing.budget_service.BudgetServiceClient;
export const CustomerServiceClient = cloudApi.billing.customer_service.CustomerServiceClient;
export const ServiceServiceClient = cloudApi.billing.service_service.ServiceServiceClient;
export const SkuServiceClient = cloudApi.billing.sku_service.SkuServiceClient;
export const CDNCacheServiceClient = cloudApi.cdn.cache_service.CacheServiceClient;
export const CDNOriginGroupServiceClient = cloudApi.cdn.origin_group_service.OriginGroupServiceClient;
export const CDNOriginServiceClient = cloudApi.cdn.origin_service.OriginServiceClient;
export const CDNProviderServiceClient = cloudApi.cdn.provider_service.ProviderServiceClient;
export const CDNRawLogsServiceClient = cloudApi.cdn.raw_logs_service.RawLogsServiceClient;
export const CDNResourceServiceClient = cloudApi.cdn.resource_service.ResourceServiceClient;
export const CertificateContentServiceClient = cloudApi.certificatemanager.certificate_content_service.CertificateContentServiceClient;
export const CertificateServiceClient = cloudApi.certificatemanager.certificate_service.CertificateServiceClient;
export const DiskPlacementGroupServiceClient = cloudApi.compute.disk_placement_group_service.DiskPlacementGroupServiceClient;
export const DiskServiceClient = cloudApi.compute.disk_service.DiskServiceClient;
export const DiskTypeServiceClient = cloudApi.compute.disk_type_service.DiskTypeServiceClient;
export const FilesystemServiceClient = cloudApi.compute.filesystem_service.FilesystemServiceClient;
export const GpuClusterServiceClient = cloudApi.compute.gpu_cluster_service.GpuClusterServiceClient;
export const HostGroupServiceClient = cloudApi.compute.host_group_service.HostGroupServiceClient;
export const HostTypeServiceClient = cloudApi.compute.host_type_service.HostTypeServiceClient;
export const ComputeImageServiceClient = cloudApi.compute.image_service.ImageServiceClient;
export const InstanceServiceClient = cloudApi.compute.instance_service.InstanceServiceClient;
export const PlacementGroupServiceClient = cloudApi.compute.placement_group_service.PlacementGroupServiceClient;
export const SnapshotScheduleServiceClient = cloudApi.compute.snapshot_schedule_service.SnapshotScheduleServiceClient;
export const SnapshotServiceClient = cloudApi.compute.snapshot_service.SnapshotServiceClient;
export const ZoneServiceClient = cloudApi.compute.zone_service.ZoneServiceClient;
export const InstanceGroupServiceClient = cloudApi.compute.instance_group_service.InstanceGroupServiceClient;
export const CrImageServiceClient = cloudApi.containerregistry.image_service.ImageServiceClient;
export const LifecyclePolicyServiceClient = cloudApi.containerregistry.lifecycle_policy_service.LifecyclePolicyServiceClient;
export const RegistryServiceClient = cloudApi.containerregistry.registry_service.RegistryServiceClient;
export const RepositoryServiceClient = cloudApi.containerregistry.repository_service.RepositoryServiceClient;
export const ScanPolicyServiceClient = cloudApi.containerregistry.scan_policy_service.ScanPolicyServiceClient;
export const ScannerServiceClient = cloudApi.containerregistry.scanner_service.ScannerServiceClient;
export const DataProcClusterServiceClient = cloudApi.dataproc.cluster_service.ClusterServiceClient;
export const JobServiceClient = cloudApi.dataproc.job_service.JobServiceClient;
export const ResourcePresetServiceClient = cloudApi.dataproc.resource_preset_service.ResourcePresetServiceClient;
export const SubclusterServiceClient = cloudApi.dataproc.subcluster_service.SubclusterServiceClient;
export const ManagerJobServiceClient = cloudApi.dataproc.manager_job_service.JobServiceClient;
export const DataprocManagerServiceClient = cloudApi.dataproc.manager_service.DataprocManagerServiceClient;
export const AppTokenServiceClient = cloudApi.datasphere.app_token_service.AppTokenServiceClient;
export const FolderBudgetServiceClient = cloudApi.datasphere.folder_budget_service.FolderBudgetServiceClient;
export const NodeServiceClient = cloudApi.datasphere.node_service.NodeServiceClient;
export const ProjectDataServiceClient = cloudApi.datasphere.project_data_service.ProjectDataServiceClient;
export const ProjectServiceClient = cloudApi.datasphere.project_service.ProjectServiceClient;
export const CommunityServiceClient = cloudApi.datasphere.community_service.CommunityServiceClient;
export const EndpointServiceClient = cloudApi.datatransfer.endpoint_service.EndpointServiceClient;
export const TransferServiceClient = cloudApi.datatransfer.transfer_service.TransferServiceClient;
export const DnsZoneServiceClient = cloudApi.dns.dns_zone_service.DnsZoneServiceClient;
export const ApiEndpointServiceClient = cloudApi.endpoint.api_endpoint_service.ApiEndpointServiceClient;
export const ApiKeyServiceClient = cloudApi.iam.api_key_service.ApiKeyServiceClient;
export const IamTokenServiceClient = cloudApi.iam.iam_token_service.IamTokenServiceClient;
export const KeyServiceClient = cloudApi.iam.key_service.KeyServiceClient;
export const RoleServiceClient = cloudApi.iam.role_service.RoleServiceClient;
export const ServiceAccountServiceClient = cloudApi.iam.service_account_service.ServiceAccountServiceClient;
export const UserAccountServiceClient = cloudApi.iam.user_account_service.UserAccountServiceClient;
export const YandexPassportUserAccountServiceClient = cloudApi.iam.yandex_passport_user_account_service.YandexPassportUserAccountServiceClient;
export const AccessKeyServiceClient = cloudApi.iam.access_key_service.AccessKeyServiceClient;
export const BrokerDataServiceClient = cloudApi.iot.broker_broker_data_service.BrokerDataServiceClient;
export const BrokerServiceClient = cloudApi.iot.broker_service.BrokerServiceClient;
export const DeviceDataServiceClient = cloudApi.iot.devices_device_data_service.DeviceDataServiceClient;
export const DeviceServiceClient = cloudApi.iot.devices_device_service.DeviceServiceClient;
export const RegistryDataServiceClient = cloudApi.iot.devices_registry_data_service.RegistryDataServiceClient;
export const IotRegistryServiceClient = cloudApi.iot.devices_registry_service.RegistryServiceClient;
export const K8sClusterServiceClient = cloudApi.k8s.cluster_service.ClusterServiceClient;
export const NodeGroupServiceClient = cloudApi.k8s.node_group_service.NodeGroupServiceClient;
export const VersionServiceClient = cloudApi.k8s.version_service.VersionServiceClient;
export const SymmetricCryptoServiceClient = cloudApi.kms.symmetric_crypto_service.SymmetricCryptoServiceClient;
export const SymmetricKeyServiceClient = cloudApi.kms.symmetric_key_service.SymmetricKeyServiceClient;
export const AsymmetricEncryptionCryptoServiceClient = cloudApi.kms.asymmetric_encryption_crypto_service.AsymmetricEncryptionCryptoServiceClient;
export const AsymmetricEncryptionKeyServiceClient = cloudApi.kms.asymmetric_encryption_key_service.AsymmetricEncryptionKeyServiceClient;
export const AsymmetricSignatureCryptoServiceClient = cloudApi.kms.asymmetric_signature_crypto_service.AsymmetricSignatureCryptoServiceClient;
export const AsymmetricSignatureKeyServiceClient = cloudApi.kms.asymmetric_signature_key_service.AsymmetricSignatureKeyServiceClient;
export const NetworkLoadBalancerServiceClient = cloudApi.loadbalancer.network_load_balancer_service.NetworkLoadBalancerServiceClient;
export const TargetGroupServiceClient = cloudApi.loadbalancer.target_group_service.TargetGroupServiceClient;
export const LoadTestingAgentRegistrationServiceClient = cloudApi.loadtesting.agent_agent_registration_service.AgentRegistrationServiceClient;
export const LoadTestingAgentServiceClient = cloudApi.loadtesting.agent_service.AgentServiceClient;
export const LoadTestingJobServiceClient = cloudApi.loadtesting.agent_job_service.JobServiceClient;
export const LoadTestingMonitoringServiceClient = cloudApi.loadtesting.agent_monitoring_service.MonitoringServiceClient;
export const LoadTestingTestServiceClient = cloudApi.loadtesting.agent_test_service.TestServiceClient;
export const LoadTestingTrailServiceClient = cloudApi.loadtesting.agent_trail_service.TrailServiceClient;
export const LoadTestingApiAgentServiceClient = cloudApi.loadtesting.api_agent_service.AgentServiceClient;
export const PayloadServiceClient = cloudApi.lockbox.payload_service.PayloadServiceClient;
export const SecretServiceClient = cloudApi.lockbox.secret_service.SecretServiceClient;
export const ExportServiceClient = cloudApi.logging.export_service.ExportServiceClient;
export const LogGroupServiceClient = cloudApi.logging.log_group_service.LogGroupServiceClient;
export const LogIngestionServiceClient = cloudApi.logging.log_ingestion_service.LogIngestionServiceClient;
export const LogReadingServiceClient = cloudApi.logging.log_reading_service.LogReadingServiceClient;
export const SinkServiceClient = cloudApi.logging.sink_service.SinkServiceClient;
export const MarketplaceInstanceServiceClient = cloudApi.marketplace.licensemanager_instance_service.InstanceServiceClient;
export const MarketplaceLockServiceClient = cloudApi.marketplace.licensemanager_lock_service.LockServiceClient;
export const MarketplaceMeteringImageProductUsageServiceClient = cloudApi.marketplace.metering_image_product_usage_service.ImageProductUsageServiceClient;
export const MarketplaceImageProductUsageServiceClient = cloudApi.marketplace.image_product_usage_service.ImageProductUsageServiceClient;
export const ClickHouseBackupServiceClient = cloudApi.mdb.clickhouse_backup_service.BackupServiceClient;
export const ClickHouseClusterServiceClient = cloudApi.mdb.clickhouse_cluster_service.ClusterServiceClient;
export const DatabaseServiceClient = cloudApi.mdb.clickhouse_database_service.DatabaseServiceClient;
export const FormatSchemaServiceClient = cloudApi.mdb.clickhouse_format_schema_service.FormatSchemaServiceClient;
export const MlModelServiceClient = cloudApi.mdb.clickhouse_ml_model_service.MlModelServiceClient;
export const ClickHouseResourcePresetServiceClient = cloudApi.mdb.clickhouse_resource_preset_service.ResourcePresetServiceClient;
export const ClickHouseUserServiceClient = cloudApi.mdb.clickhouse_user_service.UserServiceClient;
export const VersionsServiceClient = cloudApi.mdb.clickhouse_versions_service.VersionsServiceClient;
export const AuthServiceClient = cloudApi.mdb.elasticsearch_auth_service.AuthServiceClient;
export const ElasticBackupServiceClient = cloudApi.mdb.elasticsearch_backup_service.BackupServiceClient;
export const ElasticClusterServiceClient = cloudApi.mdb.elasticsearch_cluster_service.ClusterServiceClient;
export const ElasticExtensionServiceClient = cloudApi.mdb.elasticsearch_extension_service.ExtensionServiceClient;
export const ElasticResourcePresetServiceClient = cloudApi.mdb.elasticsearch_resource_preset_service.ResourcePresetServiceClient;
export const ElasticUserServiceClient = cloudApi.mdb.elasticsearch_user_service.UserServiceClient;
export const GreenplumBackupServiceClient = cloudApi.mdb.greenplum_backup_service.BackupServiceClient;
export const GreenplumClusterServiceClient = cloudApi.mdb.greenplum_cluster_service.ClusterServiceClient;
export const GreenplumResourcePresetServiceClient = cloudApi.mdb.greenplum_resource_preset_service.ResourcePresetServiceClient;
export const KafkaClusterServiceClient = cloudApi.mdb.kafka_cluster_service.ClusterServiceClient;
export const ConnectorServiceClient = cloudApi.mdb.kafka_connector_service.ConnectorServiceClient;
export const KafkaResourcePresetServiceClient = cloudApi.mdb.kafka_resource_preset_service.ResourcePresetServiceClient;
export const TopicServiceClient = cloudApi.mdb.kafka_topic_service.TopicServiceClient;
export const KafkaUserServiceClient = cloudApi.mdb.kafka_user_service.UserServiceClient;
export const MongoBackupServiceClient = cloudApi.mdb.mongodb_backup_service.BackupServiceClient;
export const MongoClusterServiceClient = cloudApi.mdb.mongodb_cluster_service.ClusterServiceClient;
export const MongoDatabaseServiceClient = cloudApi.mdb.mongodb_database_service.DatabaseServiceClient;
export const MongoResourcePresetServiceClient = cloudApi.mdb.mongodb_resource_preset_service.ResourcePresetServiceClient;
export const MongoUserServiceClient = cloudApi.mdb.mongodb_user_service.UserServiceClient;
export const MysqlBackupServiceClient = cloudApi.mdb.mysql_backup_service.BackupServiceClient;
export const MysqlClusterServiceClient = cloudApi.mdb.mysql_cluster_service.ClusterServiceClient;
export const MysqlDatabaseServiceClient = cloudApi.mdb.mysql_database_service.DatabaseServiceClient;
export const MysqlResourcePresetServiceClient = cloudApi.mdb.mysql_resource_preset_service.ResourcePresetServiceClient;
export const MysqlUserServiceClient = cloudApi.mdb.mysql_user_service.UserServiceClient;
export const OpenSearchBackupServiceClient = cloudApi.mdb.opensearch_backup_service.BackupServiceClient;
export const OpenSearchClusterServiceClient = cloudApi.mdb.opensearch_cluster_service.ClusterServiceClient;
export const OpenSearchResourcePresetServiceClient = cloudApi.mdb.opensearch_resource_preset_service.ResourcePresetServiceClient;
export const PgsqlBackupServiceClient = cloudApi.mdb.postgresql_backup_service.BackupServiceClient;
export const PgsqlClusterServiceClient = cloudApi.mdb.postgresql_cluster_service.ClusterServiceClient;
export const PgsqlDatabaseServiceClient = cloudApi.mdb.postgresql_database_service.DatabaseServiceClient;
export const PgsqlPerformanceDiagnosticsServiceClient = cloudApi.mdb.postgresql_perf_diag_service.PerformanceDiagnosticsServiceClient;
export const PgsqlResourcePresetServiceClient = cloudApi.mdb.postgresql_resource_preset_service.ResourcePresetServiceClient;
export const PgsqlUserServiceClient = cloudApi.mdb.postgresql_user_service.UserServiceClient;
export const RedisBackupServiceClient = cloudApi.mdb.redis_backup_service.BackupServiceClient;
export const RedisClusterServiceClient = cloudApi.mdb.redis_cluster_service.ClusterServiceClient;
export const RedisResourcePresetServiceClient = cloudApi.mdb.redis_resource_preset_service.ResourcePresetServiceClient;
export const SqlServerBackupServiceClient = cloudApi.mdb.sqlserver_backup_service.BackupServiceClient;
export const SqlServerClusterServiceClient = cloudApi.mdb.sqlserver_cluster_service.ClusterServiceClient;
export const SqlServerDatabaseServiceClient = cloudApi.mdb.sqlserver_database_service.DatabaseServiceClient;
export const SqlServerResourcePresetServiceClient = cloudApi.mdb.sqlserver_resource_preset_service.ResourcePresetServiceClient;
export const SqlServerUserServiceClient = cloudApi.mdb.sqlserver_user_service.UserServiceClient;
export const DashboardServiceClient = cloudApi.monitoring.dashboard_service.DashboardServiceClient;
export const OperationServiceClient = cloudApi.operation.operation_service.OperationServiceClient;
export const GroupMappingServiceClient = cloudApi.organizationmanager.group_mapping_service.GroupMappingServiceClient;
export const GroupServiceClient = cloudApi.organizationmanager.group_service.GroupServiceClient;
export const OrganizationServiceClient = cloudApi.organizationmanager.organization_service.OrganizationServiceClient;
export const SshCertificateServiceClient = cloudApi.organizationmanager.ssh_certificate_service.SshCertificateServiceClient;
export const UserServiceClient = cloudApi.organizationmanager.user_service.UserServiceClient;
export const OmCertificateServiceClient = cloudApi.organizationmanager.certificate_service.CertificateServiceClient;
export const FederationServiceClient = cloudApi.organizationmanager.federation_service.FederationServiceClient;
export const CloudServiceClient = cloudApi.resourcemanager.cloud_service.CloudServiceClient;
export const FolderServiceClient = cloudApi.resourcemanager.folder_service.FolderServiceClient;
export const ApiGatewayServiceClient = cloudApi.serverless.apigateway_service.ApiGatewayServiceClient;
export const ContainerServiceClient = cloudApi.serverless.containers_container_service.ContainerServiceClient;
export const FunctionServiceClient = cloudApi.serverless.functions_function_service.FunctionServiceClient;
export const ProxyServiceClient = cloudApi.serverless.mdbproxy_proxy_service.ProxyServiceClient;
export const TriggerServiceClient = cloudApi.serverless.triggers_trigger_service.TriggerServiceClient;
export const WebSocketConnectionServiceClient = cloudApi.serverless.apigateway_connection_service.ConnectionServiceClient;
export const BucketServiceClient = cloudApi.storage.bucket_service.BucketServiceClient;
export const AddressServiceClient = cloudApi.vpc.address_service.AddressServiceClient;
export const GatewayServiceClient = cloudApi.vpc.gateway_service.GatewayServiceClient;
export const NetworkServiceClient = cloudApi.vpc.network_service.NetworkServiceClient;
export const RouteTableServiceClient = cloudApi.vpc.route_table_service.RouteTableServiceClient;
export const SecurityGroupServiceClient = cloudApi.vpc.security_group_service.SecurityGroupServiceClient;
export const SubnetServiceClient = cloudApi.vpc.subnet_service.SubnetServiceClient;
export const YdbBackupServiceClient = cloudApi.ydb.backup_service.BackupServiceClient;
export const YdbDatabaseServiceClient = cloudApi.ydb.database_service.DatabaseServiceClient;
export const LocationServiceClient = cloudApi.ydb.location_service.LocationServiceClient;
export const YdbResourcePresetServiceClient = cloudApi.ydb.resource_preset_service.ResourcePresetServiceClient;
export const StorageTypeServiceClient = cloudApi.ydb.storage_type_service.StorageTypeServiceClient;
