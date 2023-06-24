import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
    tableName:"validators"
})

export class Validator extends Model<Validator>{
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name:string;
    
    @Column({type: DataType.STRING, allowNull: false})
    email: string;


    @Column({type: DataType.STRING})
    password: string

}