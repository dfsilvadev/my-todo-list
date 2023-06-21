import { Model, createServer } from "miragejs";

import { tasks } from "@/mocks/tasks";

export function makeServer({ environment = "test" } = {}) {
  const server = createServer({
    environment,
    models: {
      tasks: Model
    },
    seeds(server) {
      server.db.loadData({
        tasks: tasks
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/tasks", () => {
        console.log(this.schema.all("tasks"));

        return this.schema.all("tasks");
      });
    }
  });

  return server;
}
