import excel from 'exceljs'
import ProductsModel from "../model/mongo/Products.model.js";

export const downloadProducts = async (req, res) => {
    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet("Tutorials");
    const Products = await ProductsModel.find({status: 'ACTIVE'}).catch((err) => {
        console.log(err)
    })
    worksheet.columns = [
        {header: "Id", key: "id", width: 5},
        {header: "PRODUCT CODE", key: "code", width: 25},
        {header: "SPECIFICATION", key: "specification", width: 25},
        {header: "UPDATED_AT", key: "updated_at", width: 10},
    ];
    Products.forEach(item => {
        worksheet.addRow([item._id,item.code,item.specification])
    })
    workbook.xlsx.write(res, {filename: "Excel.xlsx"})
}