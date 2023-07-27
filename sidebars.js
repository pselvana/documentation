/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: "doc",
      label: "Docs Home",
      id: "home/index",
    },
    {
      type: "category",
      label: "Get Started",
      link: { type: "doc", id: "get-started/index" },
      items: [
        "get-started/whats-new",
        {
          type: "doc",
          label: "Introduction to Redpanda",
          id: "get-started/intro-to-events",
        },
        {
          type: "doc",
          label: "How Redpanda Works",
          id: "get-started/architecture",
        },
        {
          type: "doc",
          label: "Redpanda Licensing",
          id: "get-started/licenses",
        },
        {
          type: "doc",
          label: "Redpanda Quickstart",
          id: "get-started/quick-start",
        },
        {
          type: "category",
          label: "Redpanda CLI",
          link: { type: "doc", id: "get-started/rpk/index" },
          items: [
          "get-started/intro-to-rpk",
          "get-started/broker-admin",
          "get-started/rpk-install"
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Develop",
      link: { type: "doc", id: "develop/index" },
      items: [
        {
          type: "doc",
          label: "Kafka Compatibility",
          id: "develop/kafka-clients",
        },
        {
          type: "category",
          label: "Build a Chat Room Application",
          link: { type: "doc", id: "develop/code-examples" },
          items: [{
              type: "doc",
              label: "Chat Room Application",
              id: "develop/chat-room",
              },
              {
                type: "category",
                label: "Docker",
                link: { type: "doc", id: "develop/chat-room-docker" },
                items: [
                  {
                    type: "doc",
                    label: "Go",
                    id: "develop/guide-go",
                  },
                  {
                    type: "doc",
                    label: "Java",
                    id: "develop/guide-java",
                  },
                  {
                    type: "doc",
                    label: "Node.js",
                    id: "develop/guide-nodejs",
                  },
                  {
                    type: "doc",
                    label: "Python",
                    id: "develop/guide-python",
                  },
                ]
              },
              {
                type: "category",
                label: "Redpanda Cloud",
                link: { type: "doc", id: "develop/chat-room-cloud" },
                items: [
                  {
                    type: "doc",
                    label: "Go",
                    id: "develop/guide-go-cloud",
                  },
                  {
                    type: "doc",
                    label: "Java",
                    id: "develop/guide-java-cloud",
                  },
                  {
                    type: "doc",
                    label: "Node.js",
                    id: "develop/guide-nodejs-cloud",
                  },
                  {
                    type: "doc",
                    label: "Python",
                    id: "develop/guide-python-cloud",
                  },
                ]
              },
            ]
          },
        "develop/benchmark",
        "develop/http-proxy",
        "develop/config-topics",
        {
          type: "category",
          label: "Produce Data",
          link: { type: "doc", id: "develop/produce-data/index" },
          items: [
            "develop/produce-data/configure-producers",
            {
              type: "doc",
              label: "Idempotent Producers",
              id: "develop/produce-data/idempotent-producers",
            },
          ]
        },
        {
          type: "category",
          label: "Consume Data",
          link: { type: "doc", id: "develop/consume-data/index" },
          items: [
            {
              type: "doc",
              label: "Consumer Offsets",
              id: "develop/consume-data/consumer-offsets",
            },
            {
              type: "doc",
              label: "Follower Fetching",
              id: "develop/consume-data/follower-fetching"
            }
          ]
        },
        "develop/transactions",
      ],
    },
    {
      type: "category",
      label: "Deploy",
      link: { type: "doc", id: "deploy/index" },
      items: [

            {
              type: "category",
              label: "Self-Hosted",
              link: { type: "doc", id: "deploy/deployment-option/self-hosted/index" },
              items: [
                {
                  type: "category",
                  label: "Kubernetes",
                  link: { type: "doc", id: "deploy/deployment-option/self-hosted/kubernetes/index" },
                  items: [
                    {
                      type: "doc",
                      label: "Redpanda in Kubernetes Overview",
                      id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-production-deployment",
                    },
                    {
                      type: "category",
                      label: "Production Deployment Workflow",
                      link: {type: "doc", id: "deploy/deployment-option/self-hosted/kubernetes/production-workflow"},
                      items: [
                        {
                          type: "doc",
                          label: "Kubernetes Cluster Requirements",
                          id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-cluster-requirements",
                        },
                        {
                          type: "doc",
                          label: "Best Practices",
                          id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-best-practices",
                        },
                        {
                          type: "doc",
                          label: "Tune Worker Nodes",
                          id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-tune-workers",
                        },
                        {
                          type: "doc",
                          label: "Deploy Redpanda",
                          id: "deploy/deployment-option/self-hosted/kubernetes/kubernetes-deploy",
                        },
                      ]
                    },
                    {
                      type: "category",
                      label: "Guides",
                      link: {type: "doc", id: "deploy/deployment-option/self-hosted/kubernetes/get-started-dev"},
                      items: [
                        {
                          type: "doc",
                          label: "AKS",
                          id: "deploy/deployment-option/self-hosted/kubernetes/aks-guide",
                        },
                        {
                          type: "doc",
                          label: "Amazon EKS",
                          id: "deploy/deployment-option/self-hosted/kubernetes/eks-guide",
                        },
                        {
                          type: "doc",
                          label: "GKE",
                          id: "deploy/deployment-option/self-hosted/kubernetes/gke-guide",
                        },
                        {
                          type: "doc",
                          label: "Local (kind and Minikube)",
                          id: "deploy/deployment-option/self-hosted/kubernetes/local-guide",
                        },
                      ]
                    },
                  ]
                },
                {
                  type: "category",
                  label: "Linux",
                  link: { type: "doc", id: "deploy/deployment-option/self-hosted/manual/index" },
                  items: [
                    {
                    type: "category",
                  label: "Deployment Options",
                  link: { type: "doc", id: "deploy/deployment-option/self-hosted/manual/production/index" },
                  items: [
                    {
                      type: "doc",
                      label: "Deploy for Development",
                      id: "deploy/deployment-option/self-hosted/manual/production/dev-deployment",
                    },
                    {
                      type: "doc",
                      label: "Automate Deployment for Production",
                      id: "deploy/deployment-option/self-hosted/manual/production/production-deployment-automation",
                    },
                    {
                      type: "doc",
                      label: "Deploy for Production",
                      id: "deploy/deployment-option/self-hosted/manual/production/production-deployment",
                    },
                  ]
                },
                    "deploy/deployment-option/self-hosted/manual/node-property-configuration",
                    "deploy/deployment-option/self-hosted/manual/high-availability",
                    {
                      type: "doc",
                      label: "Sizing Use Cases",
                      id: "deploy/deployment-option/self-hosted/manual/sizing-use-cases",
                    },
                    {
                      type: "doc",
                      label: "Sizing Guidelines",
                      id: "deploy/deployment-option/self-hosted/manual/sizing",
                    },
                  ]
                },
              ]
            },
            {
              type: "category",
              label: "Cloud",
              link: { type: "doc", id: "deploy/deployment-option/cloud/index" },
              items: [
                {
                  type: "doc",
                  label: "Redpanda Cloud Overview",
                  id: "deploy/deployment-option/cloud/cloud-overview",
                },
                {
                  type: "doc",
                  id: "get-started/quick-start-cloud",
                },
                {
                  type: "category",
                  label: "Provision a BYOC Cluster",
                  link: { type: "doc", id: "deploy/deployment-option/cloud/provision-a-byoc-cluster/index" },
                  items: [
                    {
                      type: "doc",
                      label: "Create a BYOC Cluster on AWS",
                      id: "deploy/deployment-option/cloud/create-byoc-cluster-aws",
                    },
                    {
                      type: "doc",
                      label: "Create a BYOC Cluster on GCP",
                      id: "deploy/deployment-option/cloud/create-byoc-cluster-gcp",
                    }
                  ],
                },
                {
                  type: "category",
                  label: "Provision a Dedicated Cloud Cluster",
                  link: { type: "doc", id: "deploy/deployment-option/cloud/provision-a-dedicated-cluster/index" },
                  items: [
                    {
                      type: "doc",
                      id: "deploy/deployment-option/cloud/create-dedicated-cloud-cluster-aws",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Security",
                  link: { type: "doc", id: "deploy/deployment-option/cloud/security/index" },
                  items: [
                    {
                      type: "doc",
                      label: "Authentication",
                      id: "deploy/deployment-option/cloud/security/cloud-authentication",
                    },
                    {
                      type: "category",
                      label: "Authorization",
                      link: { type: "doc", id: "deploy/deployment-option/cloud/security/authorization/index" },
                      items: [
                        {
                          type: "doc",
                          label: "Cloud Authorization",
                          id: "deploy/deployment-option/cloud/security/authorization/cloud-authorization",
                        },
                        {
                          type: "doc",
                          label: "Cloud IAM Policies",
                          id: "deploy/deployment-option/cloud/security/authorization/cloud-iam-policies",
                        },
                      ],
                    },
                    {
                      type: "doc",
                      label: "Encryption",
                      id: "deploy/deployment-option/cloud/security/cloud-encryption",
                    },
                    {
                      type: "doc",
                      label: "Availability",
                      id: "deploy/deployment-option/cloud/security/cloud-availability",
                    },
                    {
                      type: "doc",
                      label: "Secrets",
                      id: "deploy/deployment-option/cloud/security/secrets",
                    },
                    {
                      type: "doc",
                      label: "Safety and Reliability",
                      id: "deploy/deployment-option/cloud/security/cloud-safety-reliability",
                    },
                    {
                      type: "doc",
                      label: "Network Design, Ports, and Flows",
                      id: "deploy/deployment-option/cloud/security/cloud-security-network",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Networking",
                  link: { type: "doc", id: "deploy/deployment-option/cloud/networking/index" },
                  items: [
                    {
                      type: "doc",
                      id: "deploy/deployment-option/cloud/cidr-ranges"
                    },
                    {
                      type: "doc",
                      id: "deploy/deployment-option/cloud/vpc-peering-aws",
                    },
                    {
                      type: "doc",
                      id: "deploy/deployment-option/cloud/vpc-peering-gcp",
                    },
                    {
                      type: "doc",
                      id: "deploy/deployment-option/cloud/vpc-peering",
                    }
                  ],
                },
                {
                  type: "doc",
                  label: "Create a Topic",
                  id: "deploy/deployment-option/cloud/create-topic",
                },
                {
                  type: "category",
                  label: "Managed Connectors",
                  link: { type: "doc", id: "deploy/deployment-option/cloud/managed-connectors/index" },
                  items: [
                    {
                      type: "doc",
                      label: "AWS S3 Sink Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-s3-sink-connector",
                    },
                    {
                      type: "doc",
                      label: "Google BigQuery Sink Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-gcp-bigquery-connector",
                    },
                    {
                      type: "doc",
                      label: "GCS Sink Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-gcs-connector",
                    },
                    {
                      type: "doc",
                      label: "HTTP Source Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-http-source-connector",
                    },
                    {
                      type: "doc",
                      label: "JDBC Sink Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-jdbc-sink-connector",
                    },
                    {
                      type: "doc",
                      label: "JDBC Source Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-jdbc-source-connector",
                    },
                    {
                      type: "doc",
                      label: "MirrorMaker2 Source Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-mmaker-source-connector",
                    },
                    {
                      type: "doc",
                      label: "MirrorMaker2 Checkpoint Source Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-mmaker-checkpoint-connector",
                    },
                    {
                      type: "doc",
                      label: "MirrorMaker2 Heartbeat Source Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-mmaker-heartbeat-connector",
                    },
                    {
                      type: "doc",
                      label: "MongoDB Sink Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-mongodb-sink-connector",
                    },
                    {
                      type: "doc",
                      label: "MongoDB Source Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-mongodb-source-connector",
                    },
                    {
                      type: "doc",
                      label: "MySQL (Debezium) Source Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-mysql-source-connector",
                    },
                    {
                      type: "doc",
                      label: "PostgreSQL (Debezium) Source Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-postgresql-connector",
                    },
                    {
                      type: "doc",
                      label: "Snowflake Sink Connector",
                      id: "deploy/deployment-option/cloud/managed-connectors/create-snowflake-connector",
                    },
                  ],
                },
              ]
            },
          ],

    },
    {
      "type": "category",
      "label": "Migrate",
      "link": {
        "type": "doc",
        "id": "upgrade/migrate/index"
      },
      "items": [
        {
          "type": "doc",
          "label": "Migrate from the Redpanda Helm chart",
          "id": "upgrade/migrate/kubernetes/helm-to-operator"
        },
        /*{
          "type": "doc",
          "label": "Migrate from the Cluster and Console Custom Resources",
          "id": "upgrade/migrate/kubernetes/helm-to-operator"
        },*/
        {
          "type": "category",
          "label": "Deprecated Features",
          "link": {
            "type": "doc",
            "id": "upgrade/deprecated/index"
          },
          "items": [
            {
              "type": "category",
              "label": "Cluster and Console Resources",
              "link": {
                "type": "doc",
                "id": "upgrade/deprecated/cluster-resource"
              },
              "items": [
                {
                  "type": "category",
                  "label": "Redpanda Operator",
                  "link": {
                    "type": "doc",
                    "id": "reference/redpanda-operator/index"
                  },
                  "items": [
                  {
                    "type": "category",
                    "label": "Install",
                    "link": {
                      "type": "doc",
                      "id": "reference/redpanda-operator/operator-install/index"
                    },
                    "items": [
                      "reference/redpanda-operator/kubernetes-qs-local-access",
                      "reference/redpanda-operator/kubernetes-qs-minikube",
                      "reference/redpanda-operator/kubernetes-qs-cloud"
                    ]
                  },
                  {
                    "type": "category",
                    "label": "Deploy",
                    "link": {
                      "type": "doc",
                      "id": "reference/redpanda-operator/operator-deploy/index"
                    },
                    "items": [
                      "reference/redpanda-operator/kubernetes-connectivity",
                      "reference/redpanda-operator/kubernetes-external-connect",
                      "reference/redpanda-operator/kubernetes-additional-config",
                      "reference/redpanda-operator/arbitrary-configuration"
                    ]
                  },
                  {
                    "type": "category",
                    "label": "Security",
                    "link": {
                      "type": "doc",
                      "id": "reference/redpanda-operator/operator-security/index"
                    },
                    "items": [
                      "reference/redpanda-operator/security-kubernetes",
                      "reference/redpanda-operator/tls-kubernetes",
                      "reference/redpanda-operator/kubernetes-sasl",
                      "reference/redpanda-operator/kubernetes-mtls"
                    ]
                  },
                  "reference/redpanda-operator/crd"
                ]
              }
            ]
            }
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Manage",
      link: { type: "doc", id: "manage/index" },
      items: [
              {
                type: "category",
                label: "Kubernetes",
                link: { type: "doc", id: "manage/kubernetes/index" },
                items: [
                  {
                    type: "doc",
                    label: "Customize the Helm Chart",
                    id: "manage/kubernetes/configure-helm-chart",
                  },
                  {
                    type: "doc",
                    label: "Cluster Properties",
                    id: "manage/kubernetes/cluster-property-configuration",
                  },
                  {
                    type: "doc",
                    label: "Storage",
                    id: "manage/kubernetes/configure-storage",
                  },
                  {
                    type: "category",
                    label: "Tiered Storage",
                    link: { type: "doc", id: "manage/kubernetes/tiered-storage-kubernetes/index" },
                    items: [
                      {
                        type: "doc",
                        label: "Tiered Storage",
                        id: "manage/kubernetes/tiered-storage",
                      },
                      {
                        type: "doc",
                        label: "Data Archiving",
                        id: "manage/kubernetes/data-archiving",
                      },
                    ],
                  },
                  {
                    type: "category",
                    label: "Networking and Connectivity",
                    link: { type: "doc", id: "manage/kubernetes/networking/index" },
                    items: [
                      "manage/kubernetes/networking/networking-and-connectivity",
                      {
                        type: "doc",
                        label: "Use a NodePort Service",
                        id: "manage/kubernetes/networking/configure-external-access-nodeport",
                      },
                      {
                        type: "doc",
                        label: "Use LoadBalancer Services",
                        id: "manage/kubernetes/networking/configure-external-access-loadbalancer",
                      },
                      {
                        type: "doc",
                        label: "Use Custom Services",
                        id: "manage/kubernetes/networking/custom-services",
                      },
                      {
                        type: "doc",
                        label: "Configure Listeners",
                        id: "manage/kubernetes/networking/configure-listeners",
                      }
                    ],
                  },
                  {
                    type: "category",
                    label: "Security",
                    link: { type: "doc", id: "manage/kubernetes/security/index" },
                    items: [
                      {
                        type: "doc",
                        label: "Configure TLS on Kubernetes",
                        id: "manage/kubernetes/security/kubernetes-tls",
                      },
                      {
                        type: "doc",
                        label: "Configure SASL on Kubernetes",
                        id: "manage/kubernetes/security/sasl-kubernetes",
                      },
                    ],
                  },
                  {
                    type: "doc",
                    label: "Rack Awareness",
                    id: "manage/kubernetes/kubernetes-rack-awareness",
                  },
                  {
                    type: "doc",
                    label: "Remote Read Replicas",
                    id: "manage/kubernetes/remote-read-replicas"
                  },
                  {
                    type: "doc",
                    label: "Manage Pod Resources",
                    id: "manage/kubernetes/manage-resources",
                  },
                  {
                    type: "doc",
                    label: "Scale",
                    id: "manage/kubernetes/scale",
                  },
                  {
                    type: "doc",
                    label: "Decommission Brokers",
                    id: "manage/kubernetes/decommission-brokers",
                  },
                  {
                    type: "doc",
                    label: "Delete PersistentVolumes",
                    id: "manage/kubernetes/delete-persistentvolume",
                  },
                  {
                    type: "doc",
                    label: "Upgrade Redpanda",
                    id: "manage/kubernetes/rolling-upgrade",
                  },
                  {
                    type: "doc",
                    label: "Upgrade Kubernetes",
                    id: "manage/kubernetes/upgrade-kubernetes",
                  },
                  {
                    type: "doc",
                    label: "Monitor",
                    id: "manage/kubernetes/monitor",
                  },
                  {
                    type: "doc",
                    label: "Resilience Testing",
                    id: "manage/kubernetes/resilience-testing",
                  },
                  {
                    type: "category",
                    label: "Troubleshooting",
                    link: { type: "doc", id: "manage/kubernetes/troubleshooting/index" },
                    items: [
                      "manage/kubernetes/troubleshooting/troubleshoot",
                      {
                        type: "doc",
                        label: "Diagnostics Bundle",
                        id: "manage/kubernetes/troubleshooting/diagnostics-bundle",
                      }
                    ],
                  },
                ],
              },
              {
                type: "category",
                label: "Cluster Maintenance",
                link: { type: "doc", id: "manage/cluster-maintenance/index" },
                items: [
                  "manage/cluster-maintenance/cluster-property-configuration",
                  "manage/cluster-maintenance/cluster-balancing",
                  {
                    type: "doc",
                    label: "Continuous Data Balancing",
                    id: "manage/cluster-maintenance/continuous-data-balancing",
                  },
                  {
                    type: "doc",
                    label: "Decommission Brokers",
                    id: "manage/cluster-maintenance/decommission-brokers",
                  },
                  {
                    type: "doc",
                    label: "Upgrade",
                    id: "manage/cluster-maintenance/rolling-upgrade",
                  },
                  {
                    type: "doc",
                    label: "Maintenance Mode",
                    id: "manage/node-management",
                  },
                  "manage/cluster-maintenance/disk-utilization",
                  {
                    type: "doc",
                    label: "Manage Throughput",
                    id: "manage/cluster-maintenance/manage-throughput",
                  },

                  "manage/cluster-maintenance/configure-availability",
                  {
                    type: "doc",
                    label: "Cluster Diagnostics",
                    id: "manage/cluster-maintenance/cluster-diagnostics",
                  },
                ]
              },

              {
                type: "category",
                label: "Security",
                link: { type: "doc", id: "manage/security/index" },


                items: [
                  {
                    type: "doc",
                    label: "Configure Authentication",
                    id: "manage/security/authentication"
                  },
                  {
                    type: "doc",
                    label: "Configure Authorization",
                    id: "manage/security/authorization"
                  },
                  "manage/security/encryption",
                  "manage/security/listener-configuration",
                  {
                    type: "category",
                    label: "Redpanda Console Security",
                    link: { type: "doc", id: "manage/security/console/index" },
                    items: [
                      {
                        type: "doc",
                        label: "Authentication",
                        id: "manage/security/console/authentication"
                      },
                      {
                        type: "doc",
                        label: "Authorization",
                        id: "manage/security/console/authorization"
                      },
                      {
                        type: "doc",
                        label: "Azure AD",
                        id: "manage/security/console/azure-ad"
                      },
                      {
                        type: "doc",
                        label: "GitHub",
                        id: "manage/security/console/github"
                      },
                      {
                        type: "doc",
                        label: "Generic OIDC",
                        id: "manage/security/console/generic-oidc"
                      },
                      {
                        type: "doc",
                        label: "Google",
                        id: "manage/security/console/google"
                      },
                      {
                        type: "doc",
                        label: "Keycloak",
                        id: "manage/security/console/keycloak"
                      },
                      {
                        type: "doc",
                        label: "Okta",
                        id: "manage/security/console/okta"
                      },
                      {
                        type: "doc",
                        label: "Plain",
                        id: "manage/security/console/plain"
                      },
                      {
                        type: "doc",
                        label: "TLS Termination",
                        id: "manage/security/console/tls-termination"
                      }
                    ]
                  },
                  "manage/security/iam-roles",
                ],
              },
              {
                type: "category",
                label: "Tiered Storage",
                link: {
                  type: "doc",
                  id: "manage/tiered-storage-linux/index",
                },
                items: [
                  {
                    type: "doc",
                    label: "Tiered Storage",
                    id: "manage/tiered-storage",
                  },
                  {
                    type: "doc",
                    label: "Data Archiving",
                    id: "manage/data-archiving",
                  }
                ]
              },
              {
                type: "doc",
                label: "Remote Read Replicas",
                id: "manage/remote-read-replicas",
              },
              {
                "type": "category",
                "label": "Schema Registry",
                "link": {
                  "type": "doc",
                  "id": "manage/schema-registry"
                },
                "items": [
                  "manage/schema-id-validation"
                ]
              },
              {
                type: "category",
                label: "Redpanda Console",
                link: { type: "doc", id: "manage/console/index" },
                items: [
                  "manage/console/kafka-connect",
                  "manage/console/schema-registry",
                  "manage/console/protobuf",
                  "manage/console/topic-documentation",
                  "manage/console/http-path-rewrites",
                  {
                    type: "doc",
                    label: "Edit Topic Configuration",
                    id: "manage/console/edit-topic-configuration",
                  }
                ]
              },
              "manage/data-migration",
              {
                type: "doc",
                label: "Rack Awareness",
                id: "manage/rack-awareness",
              },
              "manage/monitoring",
              "manage/io-optimization",
            ],
    },
    {
      type: "category",
      label: "Reference",
      link: { type: "doc", id: "reference/index" },


      items: [
        "reference/cluster-properties",
        "reference/tunable-properties",
        "reference/node-properties",
        "reference/topic-properties",
        "reference/node-configuration-sample",
        "reference/api-reference",
        {
          "type": "category",
          "label": "Kubernetes",
          "link": {
            "type": "doc",
            "id": "reference/kubernetes-index"
          },
          "items": [
            "reference/redpanda-helm-spec",
            "reference/console-helm-spec",
            "reference/crd"
          ]
        },
        {
          type: "category",
          label: "Monitoring Metrics",
          link: { type: "doc", id: "reference/monitor-metrics" },
          items: [
            {
              type: "doc",
              label: "Public Metrics Reference",
              id: "reference/public-metrics-reference",
            },
            {
              type: "doc",
              label: "Internal Metrics Reference",
              id: "reference/internal-metrics-reference",
            },
          ]
        },
        {
          type: "category",
          label: "rpk Commands",
          link: { type: "doc", id: "reference/rpk/index" },
          items: [
            "reference/rpk/rpk-commands",
            "reference/rpk/rpk-x-options",
            {
              type: "category",
              label: "rpk acl",
              link: { type: "doc", id: "reference/rpk/rpk-acl/rpk-acl" },
              items: [
                "reference/rpk/rpk-acl/rpk-acl",
                "reference/rpk/rpk-acl/rpk-acl-create",
                "reference/rpk/rpk-acl/rpk-acl-delete",
                {
                  type: "category",
                  label: "rpk acl user",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-acl/rpk-acl-user",
                  },
                  items: [
                    "reference/rpk/rpk-acl/rpk-acl-user",
                    "reference/rpk/rpk-acl/rpk-acl-user-create",
                    "reference/rpk/rpk-acl/rpk-acl-user-delete",
                    "reference/rpk/rpk-acl/rpk-acl-user-list",
                  ],
                }, //acl user
              ],
            }, //acl
            {
              type: "category",
              label: "rpk cloud",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-cloud/rpk-cloud"
              },
              items: [
                "reference/rpk/rpk-cloud/rpk-cloud",
                {
                  type: "category",
                  label: "rpk cloud auth",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cloud/rpk-cloud-auth"
                  },
                 items: [
                    "reference/rpk/rpk-cloud/rpk-cloud-auth-create",
                    "reference/rpk/rpk-cloud/rpk-cloud-auth-delete",
                    "reference/rpk/rpk-cloud/rpk-cloud-auth-edit",
                    "reference/rpk/rpk-cloud/rpk-cloud-auth-list",
                    "reference/rpk/rpk-cloud/rpk-cloud-auth-rename-to",
                    "reference/rpk/rpk-cloud/rpk-cloud-auth-use"
                  ]
                },
                {
                  type: "category",
                  label: "rpk cloud byoc",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cloud/rpk-cloud-byoc"
                  },
                 items: [
                    "reference/rpk/rpk-cloud/rpk-cloud-byoc-install",
                    "reference/rpk/rpk-cloud/rpk-cloud-byoc-uninstall"
                  ]
                },
                "reference/rpk/rpk-cloud/rpk-cloud-login",
                "reference/rpk/rpk-cloud/rpk-cloud-logout"
              ]
            },
            {
              type: "category",
              label: "rpk cluster",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-cluster/rpk-cluster",
              },
              items: [
                {
                  type: "category",
                  label: "rpk cluster config",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-config",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-config",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-edit",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-export",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-force-reset",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-get",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-import",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-lint",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-set",
                    "reference/rpk/rpk-cluster/rpk-cluster-config-status",
                  ],
                },
                "reference/rpk/rpk-cluster/rpk-cluster-health",
                {
                  type: "category",
                  label: "rpk cluster license",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-license",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-license",
                    "reference/rpk/rpk-cluster/rpk-cluster-license-info",
                    "reference/rpk/rpk-cluster/rpk-cluster-license-set",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster logdirs",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-logdirs",
                    "reference/rpk/rpk-cluster/rpk-cluster-logdirs-describe",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster maintenance",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance",
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance-disable",
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance-enable",
                    "reference/rpk/rpk-cluster/rpk-cluster-maintenance-status",
                  ],
                },
                "reference/rpk/rpk-cluster/rpk-cluster-metadata",
                {
                  type: "category",
                  label: "rpk cluster partitions",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-partitions",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-partitions",
                    "reference/rpk/rpk-cluster/rpk-cluster-partitions-balancer-status",
                    "reference/rpk/rpk-cluster/rpk-cluster-partitions-movement-cancel",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster self-test",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-self-test",
                  },
                  items: [
                    "reference/rpk/rpk-cluster/rpk-cluster-self-test",
                    "reference/rpk/rpk-cluster/rpk-cluster-self-test-start",
                    "reference/rpk/rpk-cluster/rpk-cluster-self-test-status",
                    "reference/rpk/rpk-cluster/rpk-cluster-self-test-stop",
                  ],
                },
                {
                  type: "category",
                  label: "rpk cluster storage",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-cluster/rpk-cluster-storage",
                  },
                  items: [
                    {
                      type: "category",
                      label: "rpk cluster storage recovery",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-cluster/rpk-cluster-storage-recovery",
                      },
                      items: [
                        "reference/rpk/rpk-cluster/rpk-cluster-storage-recovery-start",
                        "reference/rpk/rpk-cluster/rpk-cluster-storage-recovery-status",
                      ],
                    },
                  ],
                },
              ],
            }, //acl cluster
            {
              type: "category",
              label: "rpk container",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-container/rpk-container",
              },
              items: [
                "reference/rpk/rpk-container/rpk-container",
                "reference/rpk/rpk-container/rpk-container-purge",
                "reference/rpk/rpk-container/rpk-container-start",
                "reference/rpk/rpk-container/rpk-container-status",
                "reference/rpk/rpk-container/rpk-container-stop",
              ],
            },
            {
              type: "category",
              label: "rpk debug",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-debug/rpk-debug",
              },
              items: [
                "reference/rpk/rpk-debug/rpk-debug",
                "reference/rpk/rpk-debug/rpk-debug-bundle",
              ],
            },
            {
              type: "category",
              label: "rpk generate",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-generate/rpk-generate",
              },
              items: [
                "reference/rpk/rpk-generate/rpk-generate",
                "reference/rpk/rpk-generate/rpk-generate-app",
                "reference/rpk/rpk-generate/rpk-generate-grafana-dashboard",
                "reference/rpk/rpk-generate/rpk-generate-prometheus-config",
                "reference/rpk/rpk-generate/rpk-generate-shell-completion",
              ],
            },
            {
              type: "category",
              label: "rpk group",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-group/rpk-group",
              },
              items: [
                "reference/rpk/rpk-group/rpk-group",
                "reference/rpk/rpk-group/rpk-group-delete",
                "reference/rpk/rpk-group/rpk-group-describe",
                "reference/rpk/rpk-group/rpk-group-list",
                "reference/rpk/rpk-group/rpk-group-offset-delete",
                "reference/rpk/rpk-group/rpk-group-seek",
              ],
            },
            "reference/rpk/rpk-help",
            "reference/rpk/rpk-iotune",
            {
              type: "category",
              label: "rpk plugin",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-plugin/rpk-plugin",
              },
              items: [
                "reference/rpk/rpk-plugin/rpk-plugin",
                "reference/rpk/rpk-plugin/rpk-plugin-list",
                "reference/rpk/rpk-plugin/rpk-plugin-uninstall",
                "reference/rpk/rpk-plugin/rpk-plugin-install",
              ],
            },
            {
              type: "category",
              label: "rpk profile",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-profile/rpk-profile"
              },
              items: [
                "reference/rpk/rpk-profile/rpk-profile-clear",
                "reference/rpk/rpk-profile/rpk-profile-create",
                "reference/rpk/rpk-profile/rpk-profile-current",
                "reference/rpk/rpk-profile/rpk-profile-delete",
                "reference/rpk/rpk-profile/rpk-profile-edit",
                "reference/rpk/rpk-profile/rpk-profile-edit-globals",
                "reference/rpk/rpk-profile/rpk-profile-list",
                "reference/rpk/rpk-profile/rpk-profile-print",
                "reference/rpk/rpk-profile/rpk-profile-print-globals",
                "reference/rpk/rpk-profile/rpk-profile-prompt",
                "reference/rpk/rpk-profile/rpk-profile-rename-to",
                "reference/rpk/rpk-profile/rpk-profile-set",
                "reference/rpk/rpk-profile/rpk-profile-set-globals",
                "reference/rpk/rpk-profile/rpk-profile-use"
              ]
            },
            {
              type: "category",
              label: "rpk redpanda",
              link: {
                type: "doc",
                id: "reference/rpk/rpk-redpanda/rpk-redpanda",
              },
              items: [
                "reference/rpk/rpk-redpanda/rpk-redpanda",
                {
                  type: "category",
                  label: "rpk redpanda admin",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                  },
                  items: [
                    "reference/rpk/rpk-redpanda/rpk-redpanda-admin",
                    {
                      type: "category",
                      label: "rpk redpanda admin brokers",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers",
                      },
                      items: [
                        {
                          type: "category",
                          label: "rpk redpanda admin brokers decommission",
                          link: {
                            type: "doc",
                            id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-decommission",
                          },
                          items: [
                            "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-decommission-status",
                          ],
                        },
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-list",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-brokers-recommission",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin config",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                      },
                      items: [
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level-set",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-log-level",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-config-print",
                      ],
                    },
                    {
                      type: "category",
                      label: "rpk redpanda admin partitions",
                      link: {
                        type: "doc",
                        id: "reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                      },
                      items: [
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions",
                        "reference/rpk/rpk-redpanda/rpk-redpanda-admin-partitions-list",
                      ],
                    },
                  ],
                }, //rpk redpanda admin
                "reference/rpk/rpk-redpanda/rpk-redpanda-check",
                {
                  type: "category",
                  label: "rpk redpanda config",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-redpanda/rpk-redpanda-config",
                  },
                  items: [
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config-bootstrap",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config-init",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-config-set",
                  ],
                },
                "reference/rpk/rpk-redpanda/rpk-redpanda-mode",
                "reference/rpk/rpk-redpanda/rpk-redpanda-start",
                "reference/rpk/rpk-redpanda/rpk-redpanda-stop",
                {
                  type: "category",
                  label: "rpk redpanda tune",
                  link: {
                    type: "doc",
                    id: "reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                  },
                  items: [
                    "reference/rpk/rpk-redpanda/rpk-redpanda-tune",
                    "reference/rpk/rpk-redpanda/rpk-redpanda-tune-list",
                  ],
                },
              ],
            }, //rpk redpanda
            {
              type: "category",
              label: "rpk topic",
              link: { type: "doc", id: "reference/rpk/rpk-topic/rpk-topic" },
              items: [
                "reference/rpk/rpk-topic/rpk-topic",
                "reference/rpk/rpk-topic/rpk-topic-add-partitions",
                "reference/rpk/rpk-topic/rpk-topic-alter-config",
                "reference/rpk/rpk-topic/rpk-topic-consume",
                "reference/rpk/rpk-topic/rpk-topic-create",
                "reference/rpk/rpk-topic/rpk-topic-delete",
                "reference/rpk/rpk-topic/rpk-topic-describe",
                "reference/rpk/rpk-topic/rpk-topic-describe-storage",
                "reference/rpk/rpk-topic/rpk-topic-list",
                "reference/rpk/rpk-topic/rpk-topic-produce",
                "reference/rpk/rpk-topic/rpk-topic-trim-prefix"
              ],
            },
            "reference/rpk/rpk-version",
            {
              type: "category",
              label: "rpk wasm",
              link: { type: "doc", id: "reference/rpk/rpk-wasm/rpk-wasm" },
              items: [
                "reference/rpk/rpk-wasm/rpk-wasm",
                "reference/rpk/rpk-wasm/rpk-wasm-deploy",
                "reference/rpk/rpk-wasm/rpk-wasm-generate",
                "reference/rpk/rpk-wasm/rpk-wasm-remove",
              ],
            },
          ],
        },
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/redpanda-data/redpanda/releases",
        },
        {
          type: "category",
          label: "Redpanda Console",
          link: { type: "doc", id: "reference/console/index" },
          items: [
            {
              type: "doc",
              label: "Redpanda Console Configuration",
              id: "reference/console/config",
            },

            "reference/console/programmable-push-filters",
            "reference/console/record-deserialization",
            {
              type: "doc",
              label: "Redpanda Console Role-Binding Configuration",
              id: "reference/console/role-bindings",
            },
          ],
        },
        {
          type: "doc",
          label: "Docker Compose Samples",
          id: "reference/docker-compose",
        },
      ],
    },
  ],
};
