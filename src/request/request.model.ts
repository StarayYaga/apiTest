import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName:"requests"
})
export class Request extends Model<Request>{
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name:string;
    
    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, defaultValue: "Active"})
    status: string;

    @Column({type: DataType.STRING, allowNull: false})
    message: string;

    @Column({type: DataType.STRING})
    comment: string

    @Column({type: DataType.DATE})
    created_at: string

    @Column({type: DataType.DATE})
    updated_at: string
}