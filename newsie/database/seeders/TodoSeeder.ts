import Todo from "App/Models/Todo";
import { DateTime } from "luxon";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const users = await Todo.query();
    if (users.length > 0) return;
    await Todo.createMany([
      {
        title: "Finish migrations",
        desc: "add user and todo migrations",
        done: true,
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        title: "Finish seeders",
        desc: "add user and todo seeders",
        done: true,
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
      {
        title: "test and deploy",
        desc: "test all env",
        done: false,
        created_at: DateTime.now(),
        updated_at: DateTime.now(),
      },
    ]);
  }
}
