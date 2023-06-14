import Child from "@/components/childrenParent/Child";
import Parent from "@/components/childrenParent/Parent";
import SecondChild from "@/components/childrenParent/SecondChild";
import React from "react";

const ChildrenPropExample = () => {
  return (
    <div>
      <Parent>
        <SecondChild />
      </Parent>
    </div>
  );
};

export default ChildrenPropExample;
