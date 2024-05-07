import { cilArrowTop, cilOptions } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CCol, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CRow, CWidgetStatsA, CWidgetStatsE } from "@coreui/react"
import { CChartBar, CChartLine } from "@coreui/react-chartjs"

function Dashboard() {
     return (
          <>

               <div id="dashboard" className="py-3">
                    <div className="container-fluid">
                         <div className="chart-widgets">
                              <CRow>
                                   <CCol sm={4}>
                                        <CWidgetStatsA
                                             className="mb-4"
                                             color="primary"
                                             value={
                                                  <>
                                                       $9.000{' '}
                                                       <span className="fs-6 fw-normal">
                                                            (40.9% <CIcon icon={cilArrowTop} />)
                                                       </span>
                                                  </>
                                             }
                                             title="Widget title"
                                             action={
                                                  <CDropdown alignment="end">
                                                       <CDropdownToggle color="transparent" caret={false} className="p-0">
                                                            <CIcon icon={cilOptions} className="text-white" />
                                                       </CDropdownToggle>
                                                       <CDropdownMenu>
                                                            <CDropdownItem>Action</CDropdownItem>
                                                            <CDropdownItem>Another action</CDropdownItem>
                                                            <CDropdownItem>Something else here...</CDropdownItem>
                                                            <CDropdownItem disabled>Disabled action</CDropdownItem>
                                                       </CDropdownMenu>
                                                  </CDropdown>
                                             }
                                             chart={
                                                  <CChartLine
                                                       className="mt-3 mx-3"
                                                       style={{ height: '70px' }}
                                                       data={{
                                                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                                            datasets: [
                                                                 {
                                                                      label: 'My First dataset',
                                                                      backgroundColor: 'transparent',
                                                                      borderColor: 'rgba(255,255,255,.55)',
                                                                      pointBackgroundColor: '#5856d6',
                                                                      data: [65, 59, 84, 84, 51, 55, 40],
                                                                 },
                                                            ],
                                                       }}
                                                       options={{
                                                            plugins: {
                                                                 legend: {
                                                                      display: false,
                                                                 },
                                                            },
                                                            maintainAspectRatio: false,
                                                            scales: {
                                                                 x: {
                                                                      border: {
                                                                           display: false,
                                                                      },
                                                                      grid: {
                                                                           display: false,
                                                                           drawBorder: false,
                                                                      },
                                                                      ticks: {
                                                                           display: false,
                                                                      },
                                                                 },
                                                                 y: {
                                                                      min: 30,
                                                                      max: 89,
                                                                      display: false,
                                                                      grid: {
                                                                           display: false,
                                                                      },
                                                                      ticks: {
                                                                           display: false,
                                                                      },
                                                                 },
                                                            },
                                                            elements: {
                                                                 line: {
                                                                      borderWidth: 1,
                                                                      tension: 0.4,
                                                                 },
                                                                 point: {
                                                                      radius: 4,
                                                                      hitRadius: 10,
                                                                      hoverRadius: 4,
                                                                 },
                                                            },
                                                       }}
                                                  />
                                             }
                                        />
                                   </CCol>
                                   <CCol sm={4}>
                                        <CWidgetStatsA
                                             className="mb-4"
                                             color="warning"
                                             value={
                                                  <>
                                                       $9.000{' '}
                                                       <span className="fs-6 fw-normal">
                                                            (40.9% <CIcon icon={cilArrowTop} />)
                                                       </span>
                                                  </>
                                             }
                                             title="Widget title"
                                             action={
                                                  <CDropdown alignment="end">
                                                       <CDropdownToggle color="transparent" caret={false} className="p-0">
                                                            <CIcon icon={cilOptions} className="text-white" />
                                                       </CDropdownToggle>
                                                       <CDropdownMenu>
                                                            <CDropdownItem>Action</CDropdownItem>
                                                            <CDropdownItem>Another action</CDropdownItem>
                                                            <CDropdownItem>Something else here...</CDropdownItem>
                                                            <CDropdownItem disabled>Disabled action</CDropdownItem>
                                                       </CDropdownMenu>
                                                  </CDropdown>
                                             }
                                             chart={
                                                  <CChartLine
                                                       className="mt-3"
                                                       style={{ height: '70px' }}
                                                       data={{
                                                            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                                            datasets: [
                                                                 {
                                                                      label: 'My First dataset',
                                                                      backgroundColor: 'rgba(255,255,255,.2)',
                                                                      borderColor: 'rgba(255,255,255,.55)',
                                                                      data: [78, 81, 80, 45, 34, 12, 40],
                                                                      fill: true,
                                                                 },
                                                            ],
                                                       }}
                                                       options={{
                                                            plugins: {
                                                                 legend: {
                                                                      display: false,
                                                                 },
                                                            },
                                                            maintainAspectRatio: false,
                                                            scales: {
                                                                 x: {
                                                                      display: false,
                                                                 },
                                                                 y: {
                                                                      display: false,
                                                                 },
                                                            },
                                                            elements: {
                                                                 line: {
                                                                      borderWidth: 2,
                                                                      tension: 0.4,
                                                                 },
                                                                 point: {
                                                                      radius: 0,
                                                                      hitRadius: 10,
                                                                      hoverRadius: 4,
                                                                 },
                                                            },
                                                       }}
                                                  />
                                             }
                                        />
                                   </CCol>
                                   <CCol sm={4}>
                                        <CWidgetStatsA
                                             className="mb-4"
                                             color="danger"
                                             value={
                                                  <>
                                                       $9.000{' '}
                                                       <span className="fs-6 fw-normal">
                                                            (40.9% <CIcon icon={cilArrowTop} />)
                                                       </span>
                                                  </>
                                             }
                                             title="Widget title"
                                             action={
                                                  <CDropdown alignment="end">
                                                       <CDropdownToggle color="transparent" caret={false} className="p-0">
                                                            <CIcon icon={cilOptions} className="text-white" />
                                                       </CDropdownToggle>
                                                       <CDropdownMenu>
                                                            <CDropdownItem>Action</CDropdownItem>
                                                            <CDropdownItem>Another action</CDropdownItem>
                                                            <CDropdownItem>Something else here...</CDropdownItem>
                                                            <CDropdownItem disabled>Disabled action</CDropdownItem>
                                                       </CDropdownMenu>
                                                  </CDropdown>
                                             }
                                             chart={
                                                  <CChartBar
                                                       className="mt-3 mx-3"
                                                       style={{ height: '70px' }}
                                                       data={{
                                                            labels: [
                                                                 'January',
                                                                 'February',
                                                                 'March',
                                                                 'April',
                                                                 'May',
                                                                 'June',
                                                                 'July',
                                                                 'August',
                                                                 'September',
                                                                 'October',
                                                                 'November',
                                                                 'December',
                                                                 'January',
                                                                 'February',
                                                                 'March',
                                                                 'April',
                                                            ],
                                                            datasets: [
                                                                 {
                                                                      label: 'My First dataset',
                                                                      backgroundColor: 'rgba(255,255,255,.2)',
                                                                      borderColor: 'rgba(255,255,255,.55)',
                                                                      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                                                                      barPercentage: 0.6,
                                                                 },
                                                            ],
                                                       }}
                                                       options={{
                                                            maintainAspectRatio: false,
                                                            plugins: {
                                                                 legend: {
                                                                      display: false,
                                                                 },
                                                            },
                                                            scales: {
                                                                 x: {
                                                                      grid: {
                                                                           display: false,
                                                                           drawTicks: false,
                                                                      },
                                                                      ticks: {
                                                                           display: false,
                                                                      },
                                                                 },
                                                                 y: {
                                                                      border: {
                                                                           display: false,
                                                                      },
                                                                      grid: {
                                                                           display: false,
                                                                           drawBorder: false,
                                                                           drawTicks: false,
                                                                      },
                                                                      ticks: {
                                                                           display: false,
                                                                      },
                                                                 },
                                                            },
                                                       }}
                                                  />
                                             }
                                        />
                                   </CCol>
                                   <CCol sm={4}>
                                        <CWidgetStatsE
                                             className="mb-3"
                                             chart={
                                                  <CChartBar
                                                       className="mx-auto"
                                                       style={{ height: '40px', width: '80px' }}
                                                       data={{
                                                            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
                                                            datasets: [
                                                                 {
                                                                      backgroundColor: '#321fdb',
                                                                      borderColor: 'transparent',
                                                                      borderWidth: 1,
                                                                      data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
                                                                 },
                                                            ],
                                                       }}
                                                       options={{
                                                            maintainAspectRatio: false,
                                                            plugins: {
                                                                 legend: {
                                                                      display: false,
                                                                 },
                                                            },
                                                            scales: {
                                                                 x: {
                                                                      display: false,
                                                                 },
                                                                 y: {
                                                                      display: false,
                                                                 },
                                                            },
                                                       }}
                                                  />
                                             }
                                             title="Widget title"
                                             value="89.9%"
                                        />
                                   </CCol>
                                   <CCol sm={4}>
                                        <CWidgetStatsE
                                             className="mb-3"
                                             chart={
                                                  <CChartLine
                                                       className="mx-auto"
                                                       style={{ height: '40px', width: '80px' }}
                                                       data={{
                                                            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
                                                            datasets: [
                                                                 {
                                                                      backgroundColor: 'transparent',
                                                                      borderColor: '#321fdb',
                                                                      borderWidth: 2,
                                                                      data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
                                                                 },
                                                            ],
                                                       }}
                                                       options={{
                                                            maintainAspectRatio: false,
                                                            elements: {
                                                                 line: {
                                                                      tension: 0.4,
                                                                 },
                                                                 point: {
                                                                      radius: 0,
                                                                 },
                                                            },
                                                            plugins: {
                                                                 legend: {
                                                                      display: false,
                                                                 },
                                                            },
                                                            scales: {
                                                                 x: {
                                                                      display: false,
                                                                 },
                                                                 y: {
                                                                      display: false,
                                                                 },
                                                            },
                                                       }}
                                                  />
                                             }
                                             title="Widget title"
                                             value="89.9%"
                                        />
                                   </CCol>
                                   <CCol sm={4}>
                                        <CWidgetStatsE
                                             className="mb-3"
                                             chart={
                                                  <CChartBar
                                                       className="mx-auto"
                                                       style={{ height: '40px', width: '80px' }}
                                                       data={{
                                                            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M'],
                                                            datasets: [
                                                                 {
                                                                      backgroundColor: '#321fdb',
                                                                      borderColor: 'transparent',
                                                                      borderWidth: 1,
                                                                      data: [41, 78, 51, 66, 74, 42, 89, 97, 87, 84, 78, 88, 67, 45, 47],
                                                                 },
                                                            ],
                                                       }}
                                                       options={{
                                                            maintainAspectRatio: false,
                                                            plugins: {
                                                                 legend: {
                                                                      display: false,
                                                                 },
                                                            },
                                                            scales: {
                                                                 x: {
                                                                      display: false,
                                                                 },
                                                                 y: {
                                                                      display: false,
                                                                 },
                                                            },
                                                       }}
                                                  />
                                             }
                                             title="Widget title"
                                             value="89.9%"
                                        />
                                   </CCol>
                              </CRow>
                         </div>
                    </div>
               </div>

          </>
     )
}

export default Dashboard
