import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Icons
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'

const Table = props => {

	const chunk = (arr, n) => arr.length ? [arr.slice(0, n), ...chunk(arr.slice(n), n)] : []

	const [paginate, setPaginate] = useState(false)
	const [tableData, setTableData] = useState(props.data || [])
	const [totalData, setTotalData] = useState([])
	const [pages, setPages] = useState([])
	const [allPages,setAllPages] = useState([])
	const [currentSection, setCurrentSection] = useState(0)
	const [currentPage, setCurrentPage] = useState(0)

	useEffect(() => {
		if(props.maxRows && props.data.length > props.maxRows){
			setPaginate(true)
			let newArray = chunk(props.data, props.maxRows)
			let totalPages = [...Array(newArray.length + 1).keys()].filter(x => x !== 0)
			setTotalData(newArray)
			setAllPages(chunk(totalPages, 5))
			setPages(totalPages)
			setTableData(newArray[0])
		}
	}, [])

	useEffect(() => {
		setPages(allPages[currentSection])
	},[allPages, currentSection])

	useEffect(() => {
		console.log('pages' , pages)
		console.log('total pages' ,allPages)
	}, [allPages])

	useEffect(() => {
		if(paginate){
			setTableData(totalData[currentPage])
				} else {
			setTableData(props.data)
		}
	},[currentPage, totalData, paginate])

	const styles = {
		container: {
			width: props.maxViewableWidth || 700,
			height: props.maxViewableHeight + 30 || 530,
			position: 'relative',
		},
		table: {
			width: props.maxViewableWidth || 700,
			maxHeight: props.maxViewableHeight || 500,
			borderLeft: 'solid 1px #d9d9d9',
			borderRight: 'solid 1px #d9d9d9',
			borderBottom: 'solid 1px #d9d9d9',
			overflow: 'scroll',
			paddingBottom: props.maxViewableHeight/props.maxViewableHeight || 1
		},
		header: {
			width: '99.9%',
			height: 30,
			borderTop: `solid ${props.headerBorderWidth || 1}px ${props.headerBorderColor || '#454545'}`,
			borderBottom: `solid ${props.headerBorderWidth || 1}px ${props.headerBorderColor || '#454545'}`, 
			borderLeft: `solid ${props.headerBorderWidth || 1}px ${props.headerBorderColor || '#454545'}`, 
			display: 'flex',
			item: {
				minWidth: 100,
				width: (1/(Object.keys(props.data[0]).length))*(props.maxViewableWidth || 700),
				maxHeight: '100%',
				borderRight: `solid ${props.headerBorderWidth || 1}px ${props.headerBorderColor || '#454545'}`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: props.headerColor || 'white',
				padding: 5
			},
			text: {
				fontSize: props.headerFontSize || 12,
				fontWeight: 'bold',
				color: props.headerTextColor || '#454545',
				fontFamily: 'sans-serif'
			}
		},
		row: {
			width: '100%',
			height: 30,
			borderBottom: `solid ${props.rowBorderWidth || 1}px ${props.rowBorderColor || '#d9d9d9'}`,
			borderLeft: `solid ${props.rowBorderWidth || 1}px ${props.rowBorderColor || '#d9d9d9'}`,
			display: 'flex',
			cursor: 'pointer',
			item: {
				minWidth: 100,
				width: (props.maxViewableWidth || 700)/(Object.keys(props.data[0]).length)- 1 || 145,
				borderRight: `solid ${props.rowBorderWidth || 1}px ${props.rowBorderColor || '#d9d9d9'}`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: props.rowColor || 'white',
				paddingLeft: 5,
				paddingRight: 5
			},
			text: {
				fontSize: props.rowFontSize || 12,
				color: props.rowTextColor || '#454545',
				fontFamily: 'sans-serif',
				textAlign: 'justify',
			},
		},
		pagination: {
			display: 'flex', alignItems: 'center', paddingLeft: 10, position: 'absolute', bottom: 5, maxHeight: 30,
			arrow: {
		  	cursor: 'pointer', marginRight: 10
			}
		}
	}

	return (
		<div style={styles.container}>
		<div style={styles.table}>
			<div style={styles.header}>
				{Object.keys(props.data[0]).map((header,index) => {
					return (
						<div style={styles.header.item}>
							<p style={styles.header.text}>{`${header[0].toUpperCase()}${header.slice(1)}`}</p>
						</div>
					)
				})}
			</div>
			{tableData?.map((row, index) => {
				return (
					<div style={styles.row}>
						{Object.keys(row).map(field => {
							return (
								<div style={styles.row.item} >
									<p style={styles.row.text}>{row[field].length > 20 ? `${row[field].substring(0,20)}...` : row[field]}</p>
								</div>
							)
						})}
					</div>
				)
			})}
		</div>
		{paginate && 
				<div style={styles.pagination}>
							<ArrowLeft
									fill={currentSection === 0 ? '#d9d9d9' : props.arrowLeftColor || '#1890FF'}
									onClick={() => {
										if(currentSection != 0){
											setCurrentSection(currentSection - 1)
										}
									}}	
							/>
						{pages?.map(page => {
							return <p style={{fontFamily: 'sans-serif', color: currentPage == page-1 ? (props.activePageColor || '#454545') : (props.inactivePageColor || '#D9D9D9'), cursor: 'pointer', marginRight: 10}} onClick={() => {setCurrentPage(page - 1)}}>{page}</p>
						})}
						<ArrowRight
								fill={currentSection === allPages.length - 1 ? '#d9d9d9' : props.arrowRightColor || '#1890FF'}
								onClick={() => {
									if(currentSection != allPages.length - 1){
										setCurrentSection(currentSection + 1)
									}
								}}
						/>
			</div>
		}
		</div>
	)
}

/* 
	Full List of Props
	- data √
	- headerColor √
	- headerBorderColor √
	- headerBorderWidth √
	- headerTextColor √
	- headerFontSize √
	- rowColor √
	- rowBorderColor √
	- rowBorderWidth √
	- rowTextColor √
	- rowFontSize √
	- maxViewableWidth √
	- maxViewableHeight √ 
	- maxRows √
	- activePageColor √
	- inactivePageColor √
	- arrowLeftColor √
	- arrowRightColor √
*/

Table.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	headerColor: PropTypes.string,
	headerBorderColor: PropTypes.string,
	headerTextColor: PropTypes.string,
	headerFontSize: PropTypes.number,
	rowColor: PropTypes.string, 
	rowBorderColor: PropTypes.string,
	rowBorderWidth: PropTypes.number,
	rowTextColor: PropTypes.string,
	rowFontSize: PropTypes.number,
	maxViewableWidth: PropTypes.number,
	maxViewableHeight: PropTypes.number,
	maxRows: PropTypes.number,
	activePageColor: PropTypes.string,
	inactivePageColor: PropTypes.string,
	arrowLeftColor: PropTypes.string,
	arrowRightColor: PropTypes.string
}

export default Table