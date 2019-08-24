import React from 'react';

const BoardUD = (props, state) => {
    console.log('st',props.props.state);
    

    let arr = [];

    let test = () => {
        arr = props.writeud[0];
        console.log('arr', arr);
        for (let key in arr) {
            // console.log(arr[key])
            return (
                <>
                    <tr>
                        <td align="center">
                            <div>제  목</div>
                        </td>
                        <td>
                            <input id="title" name="title" maxLength="30" size="50" value={arr["board_title"]} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <div>작성자</div>
                        </td>
                        <td>
                            <input name="name" maxLength="30" size="20"  value={arr["board_name"]} readOnly/>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <div>비밀번호</div>
                        </td>
                        <td>
                            <input name="password" type="password" maxLength="4" size="10" onChange={ props.handlePw } /*value={arr["board_password"]}  readOnly*//>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <div>내  용</div>
                        </td>
                        <td>
                            <textarea name="content" cols="65" rows="15"  value={arr["board_contents"]} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">&nbsp;</td>
                    </tr>
                    <tr>
                        <td colSpan="5" align="center">
                            {/* <button onClick={ async ()=>{
                                await props.ondataSubmit()
                                // 등록 버튼 클릭 시 뒤로 가도록
                                await props.props.history.push('/board')
                                } } >등록</button> */}
                            {/* 뒤로 버큰 틀릭 시 뒤로 가도록 */}
                            <button onClick={() => { 
                                props.ondataUpdate() 

                                }}>수정</button>
                            <button onClick ={()=>{
                                (props.props.state.password === props.writeud[0].board_password) ? 
                                props.onDeleteContent()
                                 : alert('다시 입력 하거라!')
                                
                                
                            }}>삭제</button>
                            <button onClick={() => { props.props.history.push(`/board/${props.props.state.currentPage}`) }} >뒤로</button>
                        </td>
                    </tr>
                </>
                //         <tr key={key}>
                //     <td>
                //         {arr["board_id"]}
                //         {arr["board_title"]}
                //     </td>
                // </tr>
            )
        }
    }
    // console.log(arr["board_title"])
    // console.log('tt', writeud);
    // var objj = props.writeud[0];
    // console.log(objj.board_id);

    // let data = objj["board_title"]
    // var data = [{"id": 1, "second": "abcd"}];
    // console.log(data[0]["id"]);

    return (
        <div align="center">
            <br />
            <h2>작성하거라</h2>
            {/* <form id="writeform"> */}
            <table cellPadding="5" cellSpacing="5" border="1" width="600" >
                <tbody>
                    {test()}
                </tbody>
            </table>
            {/* </form> */}
        </div>
    );
};
export default BoardUD;