export const selectIsLogged = (state => state.auth.isLogged)
export const selectBalance = (state => state.walletItems.balance)
export const selectExpens = (state => state.walletItems.expenses)
export const selectIncomes = (state => state.walletItems.incomes)