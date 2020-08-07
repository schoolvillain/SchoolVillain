import styled from "@emotion/styled";
import {FlexBox, Section} from "../../../assets/style/Layout.style";
import {css} from "@emotion/core";
import {Color} from "../../../assets/style/Color.style";
import React from "react";
import {MarkdownBase, MarkdownMd, MarkdownSm} from "../../../assets/style/Markdown.style";
import {Tag} from "../../../assets/style/Util";

const WriteSection = styled.section`
  margin-top:6em;
  ${Section()};
`
const WriteContainer = styled.div`
  width:100%;
`

interface buttonProps {
    enabled: boolean;
}

const Button = styled.button`
  ${MarkdownMd(Color.white)};
  width:100%;
  height: 45px;
  border-radius: 3px;
  box-shadow: 0 1.5px 2.5px 0 rgba(0, 0, 0, 0.16);
  margin-top:30px;
  ${(props: buttonProps) => props.enabled ?
    `pointer-events:initial;
     background-color:${Color.purple200};
    ` :
    `pointer-events:none;
     background-color:${Color.purple100};
    `
}
  &:hover{
    background-color: ${Color.purple300};
  }
`

const TextArea = styled.textarea`
   width:100%;
  border:0;
  ${MarkdownBase()};
  resize: none;
  outline:none;
`

const Input = styled.input`
  width:100%;
  border:0;
  ${MarkdownBase()};
  outline:none;
`
const FileInput = styled.input`
  display:none;
`
const FakeFileInput = styled.label`
  display:inline-block;
  padding:0.5em 0.8em;
   background-color:${Color.yellow100};
  ${MarkdownBase(Color.yellow200)};
  cursor:pointer;
`
const PreviewImg = styled.div`
  width:100%;
  height:150px;
  display:flex;
  position:relative;
  top:0;
`
const Preview = styled.div`
  display:grid; 
  grid-template-columns: repeat(3, 1fr); 
  grid-gap:0.5em; 
  text-align:right;
  margin-top:1em;
`
const DelButton=styled.button`
  background-color:${Color.gray100};
  ${MarkdownSm(Color.gray200)};
  border-radius: 50%;
  width:1.5em;
  height: 1.5em;
  position: absolute;
  z-index: 2;
  margin-top: -10px;
  margin-left: -13px;
`

interface propsType {
    title: string;
    changeTitle: any;

    contents: string;
    changeContents: any;

    tag: string;
    tagList: string[];
    changeTag: any;
    onEnter: any;
    deleteTag: any;

    loadImg: any;
    deleteImg: any;
    previewList: string[];

    goEdit: any;
}

const PageEdit: React.FC<propsType> = ({
                                            title,
                                            changeTitle,
                                            contents,
                                            changeContents,
                                            tag,
                                            tagList,
                                            changeTag,
                                            onEnter,
                                            deleteTag,
                                            loadImg,
                                            deleteImg,
                                            previewList,
                                           goEdit
                                        }) => {

    return (
        <WriteSection>
            <WriteContainer>
                <div css={css`padding:1em 0; border-bottom:1px solid ${Color.gray100};`}>
                    <Input value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeTitle(e)}
                           placeholder="오늘 무슨일 있었냐?"/>
                </div>
                <div css={css`padding:1em 0; border-bottom:1px solid ${Color.gray100};`}>
                    <TextArea rows={6} value={contents}
                              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => changeContents(e)}
                              placeholder="내용을 입력해주세요."></TextArea>
                </div>
                <div css={css`padding:1em 0; border-bottom:1px solid ${Color.gray100};`}>
                    <div>
                        <FileInput type="file" id="img"
                                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => loadImg(e)}
                                   accept="image/jpg, image/png, image/jpeg, image/gif"
                                   multiple/>
                        <FakeFileInput htmlFor="img">+ 이미지 업로드</FakeFileInput>
                        <span css={css`${MarkdownSm(Color.gray200)}`}>* 10MB 이하 이미지만 업로드 하실 수 있습니다.</span>
                    </div>
                    <Preview>
                        {
                            previewList.map((preview: any, index: number) => {
                                return (
                                    <figure css={css`position:relative;`} key={index}>
                                        <DelButton onClick={() => deleteImg(index)}>X</DelButton>
                                        <PreviewImg>
                                            <img
                                                css={css`width:100%; position: absolute; clip: rect(0px 152px 130px 0px);`}
                                                src={preview}/>
                                        </PreviewImg>
                                    </figure>

                                )
                            })
                        }
                    </Preview>
                </div>
                <div css={css`padding:1em 0;`}>
                    <div css={css`margin-bottom:1em;`}>
                        <Input type="text" value={tag}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeTag(e)}
                               placeholder="#해시태그를 입력해주세요."
                               onKeyPress={(e: React.KeyboardEvent) => onEnter(e)}/>
                    </div>
                    <div>
                        {
                            tagList.map((item, index) => {
                                return (
                                    <Tag key={index}>
                                        <span css={css`margin-right:0.5em;`}># {item}</span>
                                        <span onClick={() => deleteTag(index)}>X</span>
                                    </Tag>
                                )
                            })
                        }
                    </div>
                </div>
                <Button enabled={title.length > 0 && contents.length > 0} onClick={goEdit}>등록</Button>
            </WriteContainer>
        </WriteSection>
    )
}

export default PageEdit;