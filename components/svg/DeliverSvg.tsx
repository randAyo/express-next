import React from 'react'
import { SvgHolder } from './SvgHolder'
interface Props {
    grad: string
}
export const DeliverSvg: React.FC<Props> = ({ grad }) => {
    return (
        <SvgHolder width="113" height="137" viewBox="0 0 113 137">
            <path fill={grad} d="M90.0469 70.6406H77.6875V47.0937C77.6875 45.3906 77.1294 43.7571 76.1361 42.5528C75.1427 41.3485 73.7954 40.6719 72.3906 40.6719H8.82812C7.42331 40.6719 6.07603 41.3485 5.08267 42.5528C4.08931 43.7571 3.53125 45.3906 3.53125 47.0937V119.875C3.53125 121.578 4.08931 123.212 5.08267 124.416C6.07603 125.62 7.42331 126.297 8.82812 126.297H20.8556C21.7822 128.249 23.1169 129.87 24.725 130.998C26.3332 132.125 28.158 132.718 30.0156 132.718C31.8733 132.718 33.6981 132.125 35.3062 130.998C36.9144 129.87 38.249 128.249 39.1757 126.297H82.6524C83.5791 128.249 84.9138 129.87 86.5219 130.998C88.13 132.125 89.9549 132.718 91.8125 132.718C93.6701 132.718 95.495 132.125 97.1031 130.998C98.7112 129.87 100.046 128.249 100.973 126.297H104.172C105.577 126.297 106.924 125.62 107.917 124.416C108.911 123.212 109.469 121.578 109.469 119.875V94.1875C109.463 87.9447 107.414 81.9598 103.774 77.5455C100.133 73.1312 95.196 70.648 90.0469 70.6406ZM105.833 92.0469H86.5156C86.0474 92.0469 85.5983 91.8213 85.2671 91.4199C84.936 91.0184 84.75 90.474 84.75 89.9062V74.9219H90.0469C93.9534 74.9288 97.7213 76.6779 100.633 79.8361C103.544 82.9942 105.395 87.3405 105.833 92.0469V92.0469ZM81.2188 74.9219V89.9062C81.2188 91.6094 81.7768 93.2429 82.7702 94.4472C83.7635 95.6515 85.1108 96.3281 86.5156 96.3281H105.938V113.453H100.973C100.046 111.501 98.7112 109.88 97.1031 108.752C95.495 107.625 93.6701 107.031 91.8125 107.031C89.9549 107.031 88.13 107.625 86.5219 108.752C84.9138 109.88 83.5791 111.501 82.6524 113.453H77.6875V74.9219H81.2188ZM39.1757 113.453C38.249 111.501 36.9144 109.88 35.3062 108.752C33.6981 107.625 31.8733 107.031 30.0156 107.031C28.158 107.031 26.3332 107.625 24.725 108.752C23.1169 109.88 21.7822 111.501 20.8556 113.453H7.0625V104.891H74.1562V113.453H39.1757ZM7.0625 57.7969H74.1562V87.7656H7.0625V57.7969ZM74.1562 92.0469V100.609H7.0625V92.0469H74.1562ZM8.82812 44.9531H72.3906C72.8589 44.9531 73.308 45.1787 73.6391 45.5801C73.9702 45.9815 74.1562 46.526 74.1562 47.0937V53.5156H7.0625V47.0937C7.0625 46.526 7.24852 45.9815 7.57964 45.5801C7.91076 45.1787 8.35985 44.9531 8.82812 44.9531ZM8.82812 122.016C8.35985 122.016 7.91076 121.79 7.57964 121.389C7.24852 120.987 7.0625 120.443 7.0625 119.875V117.734H19.5808C19.3689 119.15 19.3689 120.6 19.5808 122.016H8.82812ZM30.0156 128.437C28.6188 128.437 27.2533 127.935 26.0919 126.994C24.9305 126.054 24.0253 124.716 23.4907 123.152C22.9562 121.587 22.8163 119.865 23.0888 118.205C23.3613 116.544 24.034 115.018 25.0217 113.82C26.0094 112.623 27.2678 111.807 28.6378 111.477C30.0078 111.147 31.4278 111.316 32.7183 111.964C34.0088 112.612 35.1118 113.71 35.8879 115.118C36.6639 116.526 37.0781 118.181 37.0781 119.875C37.0781 122.146 36.334 124.324 35.0096 125.93C33.6851 127.535 31.8887 128.437 30.0156 128.437ZM40.4505 122.016C40.6624 120.6 40.6624 119.15 40.4505 117.734H81.3777C81.1658 119.15 81.1658 120.6 81.3777 122.016H40.4505ZM91.8125 128.437C90.4157 128.437 89.0502 127.935 87.8888 126.994C86.7274 126.054 85.8221 124.716 85.2876 123.152C84.7531 121.587 84.6132 119.865 84.8857 118.205C85.1582 116.544 85.8309 115.018 86.8186 113.82C87.8063 112.623 89.0647 111.807 90.4347 111.477C91.8047 111.147 93.2247 111.316 94.5152 111.964C95.8057 112.612 96.9087 113.71 97.6848 115.118C98.4608 116.526 98.875 118.181 98.875 119.875C98.875 122.146 98.1309 124.324 96.8064 125.93C95.482 127.535 93.6856 128.437 91.8125 128.437ZM105.938 119.875C105.938 120.443 105.751 120.987 105.42 121.389C105.089 121.79 104.64 122.016 104.172 122.016H102.247C102.459 120.6 102.459 119.15 102.247 117.734H105.938V119.875Z" />
            <path fill={grad} d="M24.7188 62.0781H19.4219C18.4853 62.0781 17.5871 62.5292 16.9249 63.3321C16.2627 64.135 15.8906 65.2239 15.8906 66.3594V81.3438C15.8906 81.9115 16.0766 82.456 16.4078 82.8574C16.7389 83.2588 17.188 83.4844 17.6562 83.4844C18.1245 83.4844 18.5736 83.2588 18.9047 82.8574C19.2359 82.456 19.4219 81.9115 19.4219 81.3438V74.9219H22.9531C23.4214 74.9219 23.8705 74.6963 24.2016 74.2949C24.5327 73.8935 24.7188 73.349 24.7188 72.7812C24.7188 72.2135 24.5327 71.669 24.2016 71.2676C23.8705 70.8662 23.4214 70.6406 22.9531 70.6406H19.4219V66.3594H24.7188C25.187 66.3594 25.6361 66.1338 25.9672 65.7324C26.2984 65.331 26.4844 64.7865 26.4844 64.2188C26.4844 63.651 26.2984 63.1065 25.9672 62.7051C25.6361 62.3037 25.187 62.0781 24.7188 62.0781Z" />
            <path fill={grad} d="M49.4375 66.3594C49.9058 66.3594 50.3549 66.1338 50.686 65.7324C51.0171 65.331 51.2031 64.7865 51.2031 64.2188C51.2031 63.651 51.0171 63.1065 50.686 62.7051C50.3549 62.3037 49.9058 62.0781 49.4375 62.0781H44.1406C43.2041 62.0781 42.3059 62.5292 41.6437 63.3321C40.9814 64.135 40.6094 65.2239 40.6094 66.3594V79.2031C40.6094 80.3386 40.9814 81.4275 41.6437 82.2304C42.3059 83.0333 43.2041 83.4844 44.1406 83.4844H49.4375C49.9058 83.4844 50.3549 83.2588 50.686 82.8574C51.0171 82.456 51.2031 81.9115 51.2031 81.3438C51.2031 80.776 51.0171 80.2315 50.686 79.8301C50.3549 79.4287 49.9058 79.2031 49.4375 79.2031H44.1406V74.9219H47.6719C48.1401 74.9219 48.5892 74.6963 48.9204 74.2949C49.2515 73.8935 49.4375 73.349 49.4375 72.7812C49.4375 72.2135 49.2515 71.669 48.9204 71.2676C48.5892 70.8662 48.1401 70.6406 47.6719 70.6406H44.1406V66.3594H49.4375Z" />
            <path fill={grad} d="M61.7969 66.3594C62.2651 66.3594 62.7142 66.1338 63.0454 65.7324C63.3765 65.331 63.5625 64.7865 63.5625 64.2188C63.5625 63.651 63.3765 63.1065 63.0454 62.7051C62.7142 62.3037 62.2651 62.0781 61.7969 62.0781H56.5C55.5635 62.0781 54.6653 62.5292 54.003 63.3321C53.3408 64.135 52.9688 65.2239 52.9688 66.3594V79.2031C52.9688 80.3386 53.3408 81.4275 54.003 82.2304C54.6653 83.0333 55.5635 83.4844 56.5 83.4844H61.7969C62.2651 83.4844 62.7142 83.2588 63.0454 82.8574C63.3765 82.456 63.5625 81.9115 63.5625 81.3438C63.5625 80.776 63.3765 80.2315 63.0454 79.8301C62.7142 79.4287 62.2651 79.2031 61.7969 79.2031H56.5V74.9219H60.0312C60.4995 74.9219 60.9486 74.6963 61.2797 74.2949C61.6109 73.8935 61.7969 73.349 61.7969 72.7812C61.7969 72.2135 61.6109 71.669 61.2797 71.2676C60.9486 70.8662 60.4995 70.6406 60.0312 70.6406H56.5V66.3594H61.7969Z" />
            <path fill={grad} d="M38.8438 68.5C38.8438 66.7968 38.2857 65.1634 37.2923 63.959C36.299 62.7547 34.9517 62.0781 33.5469 62.0781H30.0156C29.5474 62.0781 29.0983 62.3037 28.7671 62.7051C28.436 63.1065 28.25 63.651 28.25 64.2187V81.3437C28.25 81.9115 28.436 82.456 28.7671 82.8574C29.0983 83.2588 29.5474 83.4844 30.0156 83.4844C30.4839 83.4844 30.933 83.2588 31.2641 82.8574C31.5952 82.456 31.7813 81.9115 31.7813 81.3437V76.3497L35.6656 82.6281C35.9466 83.0823 36.3649 83.3826 36.8284 83.4629C37.292 83.5431 37.7629 83.3969 38.1375 83.0562C38.5121 82.7156 38.7598 82.2085 38.826 81.6465C38.8922 81.0845 38.7716 80.5136 38.4906 80.0594L35.1148 74.6029C36.1908 74.1987 37.1326 73.389 37.8032 72.2915C38.4738 71.194 38.8383 69.8658 38.8438 68.5V68.5ZM33.5469 70.6406H31.7813V66.3594H33.5469C34.0152 66.3594 34.4642 66.5849 34.7954 66.9863C35.1265 67.3878 35.3125 67.9323 35.3125 68.5C35.3125 69.0677 35.1265 69.6122 34.7954 70.0136C34.4642 70.4151 34.0152 70.6406 33.5469 70.6406Z" />

        </SvgHolder>
    );
}