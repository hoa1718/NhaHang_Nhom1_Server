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
    app.use("/ThongKe",thongKeRouter);
    app.use("/TonKho",tonKhoRouter);
    app.use("/HoaDon",NhapRouter);
    app.use("/HoaDon",datBanRouter);
    app.use("/HoaDon",thanhToanRouter);
}