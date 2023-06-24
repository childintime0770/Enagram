
import React, { useState } from 'react'
import * as Styled from "./styled"
import Controls from '../controls'
import Formatting from '../formatting'

export default function Editor() {
    const [text, setText] = useState("");

    function changeHandler(event) {
        setText(event.target.value);
    }

    return (
        <Styled.Wrapper>
            <Styled.ControlsWrapper>
						<Controls/>
					</Styled.ControlsWrapper>
					<Styled.EditingArea>
						<textarea placeholder="Type or paste (⌘+V) something here." onChange={changeHandler} value={text} />
					</Styled.EditingArea>
					<Styled.FormattingWrapper>
						<Formatting text={text}/>
					</Styled.FormattingWrapper>
        </Styled.Wrapper>
    )
}
