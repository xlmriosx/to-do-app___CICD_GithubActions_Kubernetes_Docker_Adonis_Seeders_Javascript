import User from "App/Models/User";
import { DateTime } from "luxon";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.updateOrCreateMany([
      {
        email: "fede@adonisjs.com",
        password: "secret123",
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        email: "fer@adonisjs.com",
        password: "secret123",
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        email: "lucas@adonisjs.com",
        password: "secret123",
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        email: "jorge@adonisjs.com",
        password: "secret123",
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        email: "facu@adonisjs.com",
        password: "secret123",
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
    ]);
  }
}
