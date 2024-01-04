/**
 * Copyright (c) 2022, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Row, Stack } from 'react-bootstrap';
import { useEffect } from 'react';





import TopNav from '../components/common/topnav/topnav';


import Footer from '../components/common/footer/footer';





export default function Layout({ children }) {

  useEffect(() => {
    AOS.init();
  }, []);


  useEffect(() => {
    $(document).ready(function () {
      $('.cCat_Security').hover(
        function () {
        
          $('.cCat_Security').addClass('cHiglightBox');
        },
        function () {
      
          $('.cCat_Security').removeClass('cHiglightBox');
        }
      );
    });
      
  }, []); 


  useEffect(() => {
    $(document).ready(function () {
      $('.cCat_host').hover(
        function () {
        
          $('.cCat_host').addClass('cHiglightBox');
        },
        function () {
      
          $('.cCat_host').removeClass('cHiglightBox');
        }
      );
    });
      
  }, []); 

  useEffect(() => {
    $(document).ready(function () {
      $('.cCat_Deployment').hover(
        function () {
        
          $('.cCat_Deployment').addClass('cHiglightBox');
        },
        function () {
      
          $('.cCat_Deployment').removeClass('cHiglightBox');
        }
      );
    });
      
  }, []); 



  // const TopNav = dynamic(() => import('../components/common/top-nav/TopNav'), { ssr: false });
  // const Meta = dynamic(() => import('../components/common/meta/Meta'), { ssr: false });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Choreo</title>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
     
        <script src="choreodev.js"></script>



        
      </Head>
   
      <Stack gap={0} className='main-wrapper home'>
        <TopNav />
       
    

            {children}
       

      

      </Stack>




      <Footer />


    </>
  );


}




