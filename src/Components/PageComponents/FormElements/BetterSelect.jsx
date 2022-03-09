import React from "react";
import Downshift from "downshift";
import styles from "./styles/Select.module.scss";

export default function BetterSelect(props) {
  return (
    <div>
      <Downshift
        onChange={(selection) => {
          if (selection !== "") {
            const currectSelection = selection;
            props.onSelect(currectSelection);
          }
        }}
        itemToString={(item) => (item ? item?.name : "")}
      >
        {({
          getLabelProps,
          getInputProps,
          getMenuProps,
          getItemProps,
          highlightedIndex,
          selectedItem,
          inputValue,
          isOpen,
          openMenu,
        }) => (
          <div className={styles.selectlist__wrapper}>
            <label {...getLabelProps()}>{props.placeholder}</label>
            <input
              {...getInputProps({
                onFocus: () => {
                  if (!isOpen) {
                    openMenu();
                  }
                },
                onKeyDown: (event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                  }
                },
                placeholder: props.placeHolder,
                required: props.required
              })}
            />
            <div className={styles.selectlist__list__wrapper}>
              <ul {...getMenuProps()}>
                {isOpen &&
                  props.selectionData
                    .filter(
                      (item) =>
                        !inputValue ||
                        item?.name
                          .toLowerCase()
                          .includes(inputValue.toLowerCase()),
                    )
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: index,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index
                                ? "var(--color-prim)"
                                : "white",
                            fontWeight:
                              selectedItem === item ? "bold" : "normal",
                            color: "var(--color-black)",
                          },
                        })}
                      >
                        {item?.name}
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        )}
      </Downshift>
    </div>
  );
}
