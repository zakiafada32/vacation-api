const viewDashboard = (req, res) => {
  res.render('admin/dashboard/view_dashboard');
};

const viewCategory = (req, res) => {
  res.render('./admin/category/view_category');
};

const viewBank = (req, res) => {
  res.render('./admin/bank/view_bank');
};

const viewItem = (req, res) => {
  res.render('./admin/item/view_item');
};

const viewBooking = (req, res) => {
  res.render('./admin/booking/view_booking');
};

module.exports = {
  view_dashboard: viewDashboard,
  view_category: viewCategory,
  view_bank: viewBank,
  view_item: viewItem,
  view_booking: viewBooking,
};
