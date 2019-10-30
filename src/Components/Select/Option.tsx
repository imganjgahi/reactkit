import React from "react";

export interface IOptionProps {
    value: string;
    text: string;
}

export interface IOptionState {

}

class Option extends React.Component<IOptionProps, IOptionState> {}

export default Option;