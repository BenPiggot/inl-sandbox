<App>
  <TimesheetContainer />
  <Approvals />
  <ReportingStats />
  <ChargeCode />
  <Settings? />
</App>

<TimesheetContainer>
  <TimesheetPage>
    <Header>
      <CalendarControl />
      <ScheduleControl />
      <PrintControl />
      <CloneControl />
      <NewEntryControl />
    </Header>
    <SidebarControls />
    <Timesheet>
      <TimesheetHeaderRow />
      <TimesheetRow>
        <TimesheetCell /> 
        <TimesheetCell /> 
        <TimesheetCell /> 
        <TimesheetCell /> 
        <TimesheetCell /> 
        <TimesheetCell /> 
        <TimesheetCell /> 
        <TimesheetText />
        <TimesheetText />
        <Icon />
        <Icon />
        <Icon />
      </TimesheetRow>
    </Timesheet>
    <CommentRow />
    <Footer>
      <BilledHoursText />
      <VacationBalanceText />
      <TotalHoursText />
      <FlexTimeWidget />
      <StatusText />
    </Footer>
  </TimesheetPage>
</TimesheetContainer>

<Calendar />
<Employees />
<VacationBalance />
<EmployeeContactInfo />
<DeclinedNotice />

<ChargeCode>
  <Header>
    <HeaderText />
  </Header>
  <SidebarInfo>
    <Info />
    <Info />
    <Info />
    <Info />
  </SidebarInfo>
  <ProjectCalendarGraph />
  <ProgressChart>
    <ChartHeader>
    </ChartHeader>
    <Chart />
    <ChartFooter>
      <ProjectHours />
      <ProjectBudgetRemaining />
      <ProjectCosts />
      <ProjectUninvoicedAmount />
    </ChartFooter>
  </ProgressChart>
</ChargeCode>

<Approvals>
  <SidebarControls />
  <Header>
    <ActionsControl />
    <Search />
    <Sorter />
    <StatusFilter />
    <CalendarControl />
  </Header>
  <EmployeeTable>
    <EmployeeRow>
      <EmployeeInfo />
      <VacationHoursText />
      <BilledHoursText />
      <TotalHoursText />
      <FlexTimeWidget />
      <StatusText />
      <ApproveOrDeny />
    </EmployeeRow>
  </EmployeeTable>
</Approvals>



