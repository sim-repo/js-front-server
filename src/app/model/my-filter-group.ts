import {MyFilterItem} from "./my-filter-item";
export class MyFilterGroup{
  id: string;
  model_class: string;
  control_type: string;
  caption: string;
  model_field: string;
  items: Array<MyFilterItem>;
}

