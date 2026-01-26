import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  expenses: [
    {
      id: 1769447843322,
      date: '2026-12-12',
      description: '',
      category: { label: 'Транспорт', value: 'transport' },
      sum: '900'
    },
    {
      id: 1769447862911,
      date: '2026-12-12',
      description: '',
      category: { label: 'Продукти', value: 'products' },
      sum: '8200'
    },
    {
      id: 1769447887321,
      date: '2026-12-14',
      description: '',
      category: { label: 'Здоров’я', value: 'health' },
      sum: '500'
    },
    {
      id: 1769447947823,
      date: '2026-12-31',
      description: '',
      category: { label: 'Алкоголь', value: 'alcohol' },
      sum: '300'
    },
    {
      id: 1769447988117,
      date: '2026-12-24',
      description: '',
      category: { label: 'Розваги', value: 'fun' },
      sum: '600'
    },
    {
      id: 1769448026812,
      date: '2026-12-26',
      description: '',
      category: { label: 'Все для дому', value: 'home' },
      sum: '1200'
    },
    {
      id: 1769448047915,
      date: '2026-12-15',
      description: '',
      category: { label: 'Техніка', value: 'tech' },
      sum: '1800'
    },
    {
      id: 1769448066355,
      date: '2026-12-01',
      description: '',
      category: { label: 'Комуналка, зв’язок', value: 'utilities' },
      sum: '1900'
    },
    {
      id: 1769448090111,
      date: '2026-12-10',
      description: '',
      category: { label: 'Спорт, хобі', value: 'sport' },
      sum: '550'
    },
    {
      id: 1769448113946,
      date: '2026-12-19',
      description: '',
      category: { label: 'Навчання', value: 'education' },
      sum: '2500'
    },
    {
      id: 1769448143445,
      date: '2026-12-27',
      description: '',
      category: { label: 'Інше', value: 'other' },
      sum: '300'
    },
    {
      id: 1769449000001,
      date: '2026-12-03',
      description: '',
      category: { label: 'Продукти', value: 'products' },
      sum: '2100'
    },
    {
      id: 1769449000002,
      date: '2026-12-05',
      description: '',
      category: { label: 'Транспорт', value: 'transport' },
      sum: '450'
    },
    {
      id: 1769449000003,
      date: '2026-12-07',
      description: '',
      category: { label: 'Розваги', value: 'fun' },
      sum: '1200'
    },
    {
      id: 1769449000004,
      date: '2026-12-18',
      description: '',
      category: { label: 'Здоров’я', value: 'health' },
      sum: '950'
    },
    {
      id: 1769449000005,
      date: '2026-12-21',
      description: '',
      category: { label: 'Продукти', value: 'products' },
      sum: '3400'
    },
    {
      id: 1769449000006,
      date: '2026-12-28',
      description: '',
      category: { label: 'Інше', value: 'other' },
      sum: '800'
    }
  ],

  incomes: [
    {
      id: 1769447819387,
      date: '2026-12-12',
      description: '',
      category: { label: 'ЗП', value: 'salary' },
      sum: '50000'
    }
  ]
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addExpens(state, action) {
      state.expenses.push(action.payload);
    },
    deleteExpens(state, action) {
      state.expenses = state.expenses.filter(
        (expens) => expens.id !== action.payload,
      );
    },
    addIncome(state, action) {
      state.incomes.push(action.payload);
    },
    deleteIncome(state, action) {
      state.incomes = state.incomes.filter(
        (income) => income.id !== action.payload,
      );
    },
    addBalance(state, action) {
      state.balance = action.payload;
    },
    minusBalance(state, action) {
      state.balance -= action.payload;
    },
    plusBalance(state, action) {
      state.balance += action.payload;
    },
  },
});

export const WalletReducer = walletSlice.reducer;
export const {
  addExpens,
  deleteExpens,
  addIncome,
  deleteIncome,
  addBalance,
  minusBalance,
  plusBalance,
} = walletSlice.actions;
