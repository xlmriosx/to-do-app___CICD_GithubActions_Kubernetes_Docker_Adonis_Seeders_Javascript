import { DateTime } from "luxon";
import { column, BaseModel } from "@ioc:Adonis/Lucid/Orm";
export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: string;

  @column()
  public desc: string;

  @column()
  public done: boolean;

  @column.dateTime({ autoCreate: true })
  public created_at: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime;
}
