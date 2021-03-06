import React, { FC } from 'react';

interface Props {
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputComp: FC<Props> = props => {
    const { name, value, onChange } = props;
    return (
        <>
        <input 
            type="text"
            name={name}
            value={value}
            onChange={e => onChange(e)}
        />
        </>
    )
}

export default InputComp