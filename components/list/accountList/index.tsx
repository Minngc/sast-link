import { useCallback, useRef } from "react";
import { MemorizedAccountItem } from "../../accountItem";
import styles from "./index.module.scss";

interface AccountListProps {
  selected?: number;
  accountList?: { nickName: string; mail: string }[];
  changeFocus?: (index: number) => void;
}

const AccountList = (props: AccountListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { selected, accountList = [], changeFocus = () => void 0 } = props;

  const scroll = useCallback((index: number) => {
    scrollRef.current!.scroll({ top: index * 80, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className={styles.accountList}>
        <div className={styles.scroll} ref={scrollRef}>
          <div className={styles.topWhite} />
          {accountList.map((value, index) => {
            return (
              <MemorizedAccountItem
                index={index}
                selected={index === selected}
                key={`${value.mail}_${value.nickName}`}
                nickName={`${value.nickName}`}
                mail={`${value.mail}`}
                onFocus={() => {
                  changeFocus(index);
                  scroll(index);
                }}
              />
            );
          })}
          <div className={styles.bottomWhite} />
        </div>
      </div>
    </>
  );
};

export { AccountList };