import { MobileBottom, MobileItem, MobileTop, MobileWrapper, Sum } from "./MobileList.styled";
import { IoTrashOutline } from "react-icons/io5";

export const MobileList = ({ data, isIncomes }) => {
  return (
    <MobileWrapper>
      {data.map((item) => (
        <MobileItem key={item.id}>
          <MobileTop>
            <span>{item.description}</span>

            <Sum $isIncomes={isIncomes}>
              {isIncomes ? "" : "- "}
              {item.sum}.00 грн.
            </Sum>

            <button>
              <IoTrashOutline size={18} />
            </button>
          </MobileTop>

          <MobileBottom>
            <span>{item.date}</span>
            <span>{item.category?.label ?? "Без категорії"}</span>
          </MobileBottom>
        </MobileItem>
      ))}
    </MobileWrapper>
  );
};