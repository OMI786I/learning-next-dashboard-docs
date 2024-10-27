const customers = [
  { id: 1, name: "Alice Smith" },
  { id: 2, name: "Bob Johnson" },
  { id: 3, name: "Carol Williams" },
  { id: 4, name: "David Brown" },
  { id: 5, name: "Eve Davis" },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    customer_id: customers[2].id,
    amount: 8500,
    status: "paid",
    date: "2022-10-22",
  },
  {
    customer_id: customers[3].id,
    amount: 12995,
    status: "paid",
    date: "2022-12-01",
  },
  {
    customer_id: customers[0].id,
    amount: 31000,
    status: "overdue",
    date: "2022-11-10",
  },
  {
    customer_id: customers[4].id,
    amount: 5690,
    status: "pending",
    date: "2022-09-18",
  },
  {
    customer_id: customers[2].id,
    amount: 7450,
    status: "paid",
    date: "2022-08-30",
  },
  {
    customer_id: customers[1].id,
    amount: 12000,
    status: "overdue",
    date: "2022-11-25",
  },
  {
    customer_id: customers[3].id,
    amount: 22000,
    status: "pending",
    date: "2022-12-18",
  },
  {
    customer_id: customers[4].id,
    amount: 45000,
    status: "overdue",
    date: "2022-12-15",
  },
  {
    customer_id: customers[0].id,
    amount: 17995,
    status: "paid",
    date: "2022-10-12",
  },
  {
    customer_id: customers[2].id,
    amount: 6300,
    status: "pending",
    date: "2022-09-05",
  },
  {
    customer_id: customers[3].id,
    amount: 9900,
    status: "paid",
    date: "2022-10-26",
  },
  {
    customer_id: customers[4].id,
    amount: 32000,
    status: "pending",
    date: "2022-11-08",
  },
  {
    customer_id: customers[1].id,
    amount: 5000,
    status: "overdue",
    date: "2022-12-20",
  },
];
