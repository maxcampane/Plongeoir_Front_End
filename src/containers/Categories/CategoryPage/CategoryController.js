import React from "react";
import CategoryPage from "./CategoryPage";

const categoryController = (props) => <CategoryPage key={props.match.params.id}
                                                    {...props}/>;

export default categoryController;