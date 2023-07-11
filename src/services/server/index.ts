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

      this.get("/tasks", () => this.schema.all("tasks"));

      this.post("/tasks", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("tasks", data);
      });

      this.put("/tasks/:id", (_, request) => {
        const { id } = request.params;
        const { checked } = JSON.parse(request.requestBody);

        return server.db.tasks.update(id, {
          status: !checked ? "created" : "done",
          checked
        });
      });
    }
  });

  return server;
}
