import React from 'react'
import classes from './DropDown.module.scss'
import Link from 'next/link';

interface DropDownProps {
	toggleDropDown: () => void;
	toggleNav: () => void;
	content: string[]
}

export const DropDown: React.FC<DropDownProps> = ({ toggleDropDown, toggleNav, content }) => {
	const { dropdownContent, dropdownUl, dropdownLi } = classes;
	return (
		<div
			onMouseLeave={toggleDropDown}
			className={dropdownContent}
		>
			<ul className={dropdownUl}>
				{
					content.map((ex, index) =>
						<Link as={`/services/${ex}`} href={`/services/${ex}`}><li
							key={index}
							className={dropdownLi}
							onClick={() => {
								toggleDropDown();
								toggleNav();
							}}
						>
							<a>{ex}</a>
						</li>
						</Link>
					)
				}

			</ul>
		</div>
	);
}