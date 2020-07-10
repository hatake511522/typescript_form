import React, { FC } from 'react';

interface Props {
    name: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextareaComp: FC<Props> = props => {
    const { name, value, onChange } = props;
    return (
        <div>
            <textarea 
                name={name}
                value={value}
                onChange={e => onChange(e)}
            ></textarea>
        </div>
    )
}

export default TextareaComp;