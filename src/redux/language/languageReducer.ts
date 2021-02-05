import { CHANGE_LANGUAGE, ADD_LANGUAGE,LanguageActionTypes } from './languageActions';
// import { stat } from "fs";

//这个文件用来处理语言切换
//传入状态和动作，传出新的状态
//整个reducer是数据的处理过程
import i18next  from "i18next";

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

export default (state = defaultState, action:LanguageActionTypes) => {
  console.log(state, action)
  switch(action.type){
    case CHANGE_LANGUAGE:
      i18next.changeLanguage(action.payload);
      return { ...state, language: action.payload }
    case ADD_LANGUAGE:
      return {
        ...state, 
        languageList:[...state.languageList,action.payload]
      }
    default:
      return state
  }
  
};
