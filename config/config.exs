# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :phoenix2,
  ecto_repos: [Phoenix2.Repo]

# Configures the endpoint
config :phoenix2, Phoenix2.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "98dedZS9IZz8C8tCw+eLZpi6bLBubqcWcl58VIDFAOipbcw7xFxKPAuIDsMsVWB6",
  render_errors: [view: Phoenix2.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Phoenix2.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
