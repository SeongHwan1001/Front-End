import React from 'react';
//import { Route, Link } from 'react-router-dom';
//import { BoardWrite } from './boardPages';
import { BoardItem } from './boardPages';
import { Link } from 'react-router-dom';

const Board = (props) => {
    console.log(props.list[100].rownum);
    console.log(props.totalCount);

    ////총 게시글 개수를 비구조화 할당하며 선언
    const { totalCount } = props;


    //한 페이지에 출력될 게시물 수, 페이지당 10개의 게시물
    let countList = 10;


    //한 화면에 출력될 페이지 수, 한 화면에 10개의 페이지를 출력
    let countPage = 10;


    //현재 페이지 번호
    let currentPage = 5;


    
    //totalPage 총 페이지의 수를 정하는 변수. 연산을 통해 변해야 하므로 let으로 선언.
    //한 페이지당 10개의 게시글이 있으므로 10으로 나눈 값에 나머지가 있을 경우 올림을 해서 총 페이지수를 정한다.
    let totalPage = totalCount / 10;
    if(totalCount % 10 > 0) {
        totalPage = Math.ceil(totalPage);
        console.log('올림을 했다면 총 페이지의 수는? ', totalPage);
    }


    //현재 페이지번호가 총 페이지번호보다 크다면 현재 페이지번호를 강제로 총 페이지번호로 치환
    if(currentPage > totalPage) {
        currentPage = totalPage;
    }

    //countPage를 어떻게 출력할 지 startPage와 endPage를 지정.
    //ex1) currentPage가 5일 때, startPage=1  / endPage=10
    //ex2) currentPage가 13일 때, startPage=11  / endPage=20

    //시작 페이지 구하는 식
    let startPage = Math.floor(((currentPage - 1) / 10)) * 10 + 1;
    console.log('startPage : ', startPage);

    //끝 페이지 구하는 식
    let endPage = startPage + countPage - 1;
    console.log('endPage : ', endPage);

    //마지막 페이지가 ~0 단위로 안떨어지는 경우에는 마지막 페이지를 총 페이지수로 대체해야 함
    if(endPage > totalPage) {
        endPage = totalPage;
    }



    

    const pageNumber = [];
    for(let i=1; i<totalPage+1; i++) {
        pageNumber.push(i);
    }

    const pageNumberList = () => {
        const arrTmp = [];
        for(let i=startPage; i<=endPage; i++) {
            console.log(i);
            if(i === currentPage) {
                arrTmp.push(<Link to='/board/:pageNum' style={{ textDecoration: 'none' }} key={i}><b>{i} </b></Link>);
                // return (
                //     <Link to='/board/:pageNum' style={{ textDecoration: 'none' }}><b>[{i}] </b></Link>
                // )
            }
            else {
                arrTmp.push(<Link to='/board/:pageNum' style={{ textDecoration: 'none' }} key={i}>[{i}] </Link>);
                // return (
                //     <Link to='/board/:pageNum' style={{ textDecoration: 'none' }}>[{i}] </Link>
                // )
            }
        }
        return arrTmp;
    }

    // const pageNumberList = pageNumber.map((value, key) => 
    // {
    //     for(let i=startPage; i<=endPage; i++) {
    //         console.log(i);
    //         if(i === currentPage) {
    //             return (
    //                 <Link
    //                     to='/board/:pageNum'
    //                     style={{ textDecoration: 'none' }}
    //                     key={key}
    //                 >
    //                     <b>
    //                         [{value}] 
    //                     </b>
    //                 </Link>
    //             )
    //         }
    //         else {
    //             return (
    //                 <Link
    //                     to='/board/:pageNum'
    //                     style={{ textDecoration: 'none' }}
    //                     key={key}
    //                 >
    //                     [{value}] 
    //                 </Link>
    //             )
    //         }

    //     }
    // });

    const List = props.list.map((value, key) => 
    {
        return (
            <BoardItem
                no={value.rownum}
                title={value.board_title}
                name={value.board_name}
                date={value.board_date}
                key={key}
            />
        )
    });

    return (
        <div align="center">
            <br />
            <h2 align="center">3조 게시판 렛츠기릿</h2>

            <table width="1000" border="1">
                <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>제   목</th>
                        <th>이   름</th>
                        <th>작성 일자</th>
                    </tr>
                </thead>
                
                <tbody>
                    {List}
                </tbody>
            </table>
            <br />

            <center>
                {pageNumberList()}
            </center>
        </div>
    );
};

export default Board;