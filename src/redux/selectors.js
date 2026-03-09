export const selectIsLogged = (state) => state.auth?.isLogged ?? false;
export const selectBalance = (state) => state.walletItems?.balance ?? 0;
export const selectExpens = (state) => state.walletItems?.expenses ?? [];
export const selectIncomes = (state) => state.walletItems?.incomes ?? [];
export const selectLogin = (state) => state.auth?.user?.login ?? "";
