const hoaDonRouter = require("./HoaDon");
const thucDonRouter = require("./ThucDon");
const thongKeRouter = require("./ThongKe");
const tonKhoRouter = require("./TonKho");
const nhapRouter = require("./Nhap");
const datBanRouter = require("./DatBan");
const thanhToanRouter = require("./ThanhToan");
function route(app){
    app.use("/HoaDon",hoaDonRouter);
    app.use("/ThucDon",thucDonRouter);
    app.use("/HoaDon",thongKeRouter);
    app.use("/HoaDon",tonKhoRouter);
    app.use("/HoaDon",hoaDonRouter);
    app.use("/HoaDon",hoaDonRouter);
    app.use("/HoaDon",hoaDonRouter);
}