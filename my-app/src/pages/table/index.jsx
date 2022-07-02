
function DataTableBodyCell({ noBorder, align, children }) {
  return (
    <TTBox
      component="td"
      textAlign={align}
      py={1.5}
      px={3}
      sx={({ palette: { light }, typography: { size }, borders: { borderWidth } }) => ({
        fontSize: size.sm,
        borderBottom: noBorder ? "none" : `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <TTBox
        display="inline-block"
        width="max-content"
        color="text"
        sx={{ verticalAlign: "middle" }}
      >
        {children}
      </TTBox>
    </TTBox>
  );
}

// Setting default values for the props of DataTableBodyCell
DataTableBodyCell.defaultProps = {
  noBorder: false,
  align: "left",
};

// Typechecking props for the DataTableBodyCell
DataTableBodyCell.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right", "center"]),
};


function DataTableHeadCell({ width, children, sorted, align, ...rest }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <TTBox
      component="th"
      width={width}
      py={1.5}
      px={3}
      sx={({ palette: { light }, borders: { borderWidth } }) => ({
        borderBottom: `${borderWidth[1]} solid ${light.main}`,
      })}
    >
      <TTBox
        {...rest}
        position="relative"
        textAlign={align}
        color={darkMode ? "white" : "secondary"}
        opacity={0.7}
        sx={({ typography: { size, fontWeightBold } }) => ({
          fontSize: size.xxs,
          fontWeight: fontWeightBold,
          textTransform: "uppercase",
          cursor: sorted && "pointer",
          userSelect: sorted && "none",
        })}
      >
        {children}
        {sorted && (
          <TTBox
            position="absolute"
            top={0}
            right={align !== "right" ? "16px" : 0}
            left={align === "right" ? "-5px" : "unset"}
            sx={({ typography: { size } }) => ({
              fontSize: size.lg,
            })}
          >
            <TTBox
              position="absolute"
              top={-6}
              color={sorted === "asc" ? "text" : "secondary"}
              opacity={sorted === "asc" ? 1 : 0.5}
            >
              <Icon>arrow_drop_up</Icon>
            </TTBox>
            <TTBox
              position="absolute"
              top={0}
              color={sorted === "desc" ? "text" : "secondary"}
              opacity={sorted === "desc" ? 1 : 0.5}
            >
              <Icon>arrow_drop_down</Icon>
            </TTBox>
          </TTBox>
        )}
      </TTBox>
    </TTBox>
  );
}

// Setting default values for the props of DataTableHeadCell
DataTableHeadCell.defaultProps = {
  width: "auto",
  sorted: "none",
  align: "left",
};

// Typechecking props for the DataTableHeadCell
DataTableHeadCell.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
  sorted: PropTypes.oneOf([false, "none", "asc", "desc"]),
  align: PropTypes.oneOf(["left", "right", "center"]),
};

function DataTable({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  isSorted,
  noEndBorder,
}) {
  const defaultValue = entriesPerPage.defaultValue ? entriesPerPage.defaultValue : 10;
  const entries = entriesPerPage.entries
    ? entriesPerPage.entries.map((el) => el.toString())
    : ["5", "10", "15", "20", "25"];
  const columns = useMemo(() => table.columns, [table]);
  const data = useMemo(() => table.rows, [table]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  // Set the default value for the entries per page when component mounts
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue, setPageSize]);

  // Set the entries per page value based on the select value
  const setEntriesPerPage = (value) => setPageSize(value);

  // Render the pagination
  const renderPagination = pageOptions.map((option) => (
    <TTPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </TTPagination>
  ));

  // Handler for the input to set the pagination index
  const handleInputPagination = ({ target: { value } }) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  // Customized page options starting from 1
  const customizedPageOptions = pageOptions.map((option) => option + 1);

  // Setting value for the pagination input
  const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

  // Search input value state
  const [search, setSearch] = useState(globalFilter);

  // Search input state handle
  const onSearchChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 100);

  // A function that sets the sorted value for the table
  const setSortedValue = (column) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? "desc" : "asc";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  // Setting the entries starting point
  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  // Setting the entries ending point
  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      {entriesPerPage || canSearch ? (
        <TTBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          {entriesPerPage && (
            <TTBox display="flex" alignItems="center">
              <Autocomplete
                disableClearable
                value={pageSize.toString()}
                options={entries}
                onChange={(event, newValue) => {
                  setEntriesPerPage(parseInt(newValue, 10));
                }}
                size="small"
                sx={{ width: "5rem" }}
                renderInput={(params) => <TTInput {...params} />}
              />
              <TTTypography variant="caption" color="secondary">
                &nbsp;&nbsp;entries per page
              </TTTypography>
            </TTBox>
          )}
          {canSearch && (
            <TTBox width="12rem" ml="auto">
              <TTInput
                placeholder="Search..."
                value={search}
                size="small"
                fullWidth
                onChange={({ currentTarget }) => {
                  setSearch(search);
                  onSearchChange(currentTarget.value);
                }}
              />
            </TTBox>
          )}
        </TTBox>
      ) : null}
      <Table {...getTableProps()}>
        <TTBox component="thead">
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <DataTableHeadCell
                  {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                  width={column.width ? column.width : "auto"}
                  align={column.align ? column.align : "left"}
                  sorted={setSortedValue(column)}
                >
                  {column.render("Header")}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </TTBox>
        <TableBody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <DataTableBodyCell
                    noBorder={noEndBorder && rows.length - 1 === key}
                    align={cell.column.align ? cell.column.align : "left"}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                    
                  </DataTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <TTBox
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
      >
        {showTotalEntries && (
          <TTBox mb={{ xs: 3, sm: 0 }}>
            <TTTypography variant="button" color="secondary" fontWeight="regular">
              Showing {entriesStart} to {entriesEnd} of {rows.length} entries
            </TTTypography>
          </TTBox>
        )}
        {pageOptions.length > 1 && (
          <TTPagination
            variant={pagination.variant ? pagination.variant : "gradient"}
            color={pagination.color ? pagination.color : "info"}
          >
            {canPreviousPage && (
              <TTPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_left</Icon>
              </TTPagination>
            )}
            {renderPagination.length > 6 ? (
              <TTBox width="5rem" mx={1}>
                <TTInput
                  inputProps={{ type: "number", min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  onChange={(handleInputPagination, handleInputPaginationValue)}
                />
              </TTBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <TTPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
              </TTPagination>
            )}
          </TTPagination>
        )}
      </TTBox>
    </TableContainer>
  );
}

// Setting default values for the props of DataTable
DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
};

// Typechecking props for the DataTable
DataTable.propTypes = {
  entriesPerPage: PropTypes.oneOfType([
    PropTypes.shape({
      defaultValue: PropTypes.number,
      entries: PropTypes.arrayOf(PropTypes.number),
    }),
    PropTypes.bool,
  ]),
  canSearch: PropTypes.bool,
  showTotalEntries: PropTypes.bool,
  table: PropTypes.objectOf(PropTypes.array).isRequired,
  pagination: PropTypes.shape({
    variant: PropTypes.oneOf(["contained", "gradient"]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
  }),
  isSorted: PropTypes.bool,
  noEndBorder: PropTypes.bool,
};


function authorsTableData() {
  const Author = ({ image, name, email }) => (
    <TTBox display="flex" alignItems="center" lineHeight={1}>
      <TTAvatar src={image} name={name} size="sm" />
      <TTBox ml={2} lineHeight={1}>
        <TTTypography display="block" variant="button" fontWeight="medium">
          {name}
        </TTTypography>
        <TTTypography variant="caption">{email}</TTTypography>
      </TTBox>
    </TTBox>
  );

  const Job = ({ title, description }) => (
    <TTBox lineHeight={1} textAlign="left">
      <TTTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </TTTypography>
      <TTTypography variant="caption">{description}</TTTypography>
    </TTBox>
  );

  return {
    columns: [
      { Header: "author", accessor: "author", width: "45%", align: "left" },
      { Header: "function", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "employed", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        author: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <TTBox ml={-1}>
            <TTBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <TTBox ml={-1}>
            <TTBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        function: <Job title="Executive" description="Projects" />,
        status: (
          <TTBox ml={-1}>
            <TTBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <TTBox ml={-1}>
            <TTBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <TTBox ml={-1}>
            <TTBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
      {
        author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <TTBox ml={-1}>
            <TTBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </TTBox>
        ),
        employed: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </TTTypography>
        ),
        action: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </TTTypography>
        ),
      },
    ],
  };
}

function projectsTableData() {
  const Project = ({ image, name }) => (
    <TTBox display="flex" alignItems="center" lineHeight={1}>
      <TTAvatar src={image} name={name} size="sm" variant="rounded" />
      <TTTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </TTTypography>
    </TTBox>
  );

  const Progress = ({ color, value }) => (
    <TTBox display="flex" alignItems="center">
      <TTTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </TTTypography>
      <TTBox ml={0.5} width="9rem">
        <TTProgress color={color} value={value} />
      </TTBox>
    </TTBox>
  );

  return {
    columns: [
      { Header: "project", accessor: "project", width: "30%", align: "left" },
      { Header: "budget", accessor: "budget", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: <Project image={LogoAsana} name="Asana" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,500
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </TTTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoGithub} name="Github" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $5,000
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </TTTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoAtlassian} name="Atlassian" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $3,400
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </TTTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoSpotify} name="Spotify" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $14,000
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            working
          </TTTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoSlack} name="Slack" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $1,000
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            canceled
          </TTTypography>
        ),
        completion: <Progress color="error" value={0} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
      {
        project: <Project image={logoInvesion} name="Invesion" />,
        budget: (
          <TTTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $2,300
          </TTTypography>
        ),
        status: (
          <TTTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </TTTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <TTTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </TTTypography>
        ),
      },
    ],
  };
}

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <TTBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <TTBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <TTTypography variant="h6" color="white">
                  Authors Table
                </TTTypography>
              </TTBox>
              <TTBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={false}
                  noEndBorder
                />
              </TTBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <TTBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <TTTypography variant="h6" color="white">
                  Projects Table
                </TTTypography>
              </TTBox>
              <TTBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </TTBox>
            </Card>
          </Grid>
        </Grid>
      </TTBox>
      {/* <FooterDash/> */}
    </DashboardLayout>
  );
}
