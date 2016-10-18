defmodule Phoenix2.PageController do
    use Phoenix2.Web, :controller

    def index(conn, _params) do
        render conn, "index.html"
    end
end
