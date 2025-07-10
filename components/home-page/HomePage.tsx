"use client";
import { useState } from "react";
import { Button } from "../button/Button";
import "./homePage.css";

export const HomePage = () => {
  const [paragraph, setParagraph] = useState<string>("");
  const [hideHeader, setHideHeader] = useState<boolean>(false);

  const handleSubmit = (formData: FormData) => {
    setParagraph(formData.get("paragraphMessage") as string);
  };

  const handleToggleHeader = () => {
    setHideHeader(!hideHeader);
  };

  return (
    <div>
      <h3 className={hideHeader ? "hide" : "show"}>Welcome to my homepage</h3>
      <p>{paragraph}</p>
      <form action={handleSubmit}>
        <input type="text" name="paragraphMessage" />
        <button type="submit">Update paragraph</button>
      </form>
      <Button
        action={handleToggleHeader}
        appearance=""
        type="button"
        text={hideHeader ? "Show header" : "Hide header"}
      />
    </div>
  );
};
