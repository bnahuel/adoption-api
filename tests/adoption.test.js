import request from "supertest";
import app from "../src/app.js";

describe("Adoption API", () => {

  let createdId;

  test("GET /api/adoptions -> debe devolver array", async () => {
    const res = await request(app).get("/api/adoptions");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("POST /api/adoptions -> crear adoption", async () => {
    const res = await request(app)
      .post("/api/adoptions")
      .send({ name: "Dog", adopted: false });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");

    createdId = res.body.id;
  });

  test("GET /api/adoptions/:id -> obtener adoption", async () => {
    const res = await request(app).get(`/api/adoptions/${createdId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdId);
  });

  test("GET /api/adoptions/:id -> 404 si no existe", async () => {
    const res = await request(app).get("/api/adoptions/123456");

    expect(res.statusCode).toBe(404);
  });

  test("DELETE /api/adoptions/:id -> eliminar", async () => {
    const res = await request(app).delete(`/api/adoptions/${createdId}`);

    expect(res.statusCode).toBe(200);
  });

});