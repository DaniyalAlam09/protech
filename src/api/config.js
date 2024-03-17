// Auth
export const API_AUTHENTICATE = "/login";

// PRE LOGIN APIs
export const API_CREATE_MEMBER = "/create";

//POST LOGIN APIs
export const API_MEMBER_INFO = "/info";
export const API_MEMBER_LOGIN = "/login";
export const API_MEMBER_LOGOUT = "/logout";
export const API_USER_LISTING = "/user/list";
export const API_USER_INFO = "/user/show";
export const API_USER_IMAGE = "/user/get-image";
export const API_USER_CREATE = "/user/store";
export const API_USER_UPDATE = "/user/update";
export const API_USER_RECREATE = "/user/re-create";
export const API_USER_DELETE = "/user/delete";

export const API_COMORBIDITY_CREATE = "/comorbidity/store";
export const API_COMORBIDITY_LISTING = "/comorbidity/list";
export const API_COMORBIDITY_DELETE = "/comorbidity/delete";
export const API_COMORBIDITY_RECREATE = "/comorbidity/re-create";
export const API_COMORBIDITY_UPDATE = "/comorbidity/update";

export const API_COMPLICATION_CREATE = "/complication/store";
export const API_COMPLICATION_LISTING = "/complication/list";
export const API_COMPLICATION_DELETE = "/complication/delete";
export const API_COMPLICATION_RECREATE = "/complication/re-create";
export const API_COMPLICATION_UPDATE = "/complication/update";

export const API_PROCEDURE_CREATE = "/procedure/store";
export const API_PROCEDURE_LISTING = "/procedure/list";
export const API_PROCEDURE_DELETE = "/procedure/delete";
export const API_PROCEDURE_RECREATE = "/procedure/re-create";
export const API_PROCEDURE_UPDATE = "/procedure/update";

export const API_GROUP_CREATE = "/group/store";
export const API_GROUP_LISTING = "/group/list";
export const API_GROUP_DELETE = "/group/delete";
export const API_GROUP_RECREATE = "/group/re-create";
export const API_GROUP_UPDATE = "/group/update";
export const API_GROUP_CONSULTANT = "/group/consultants";

export const API_CASE_SINGLE = "/case/show";
export const API_CASE_LISTING = "/case/list";
export const API_UPCOMING_CASE_LISTING = "/case/upcoming";
export const API_FLAGGED_CASE_LISTING = "/flagged-case/list/flagged";
export const API_DRAFT_CASE_LISTING = "/case/draft";
export const API_PUBLISHED_CASE_LISTING = "/case/published";
export const API_CASE_BOOKMARK = "/case/bookmark";
export const API_FLAG_CASE_BOOKMARK = "/flagged-case/bookmark";
export const API_CASE_UPDATE = "/case/update";
export const API_CASE_FILTER = "/case/filters";
export const API_CASE_DELETE = "/case/delete";
export const API_CASE_RECREATE = "/case/re-create";


export const API_COMMENT_LISTING = "/comment/list";
export const API_COMMENT_CREATE = "/comment/store";
export const API_COMMENT_UPDATE = "/comment/update";
export const API_COMMENT_DELETE = "/comment/delete";

export const API_CONSULTANT_LISTING = "/consultant/list";

export const API_CASE_STATUS_SET = "/flagged-case/set";
export const API_CLOSE_FLAG_CASE = "/flagged-case/close-flag";
export const API_COMMENT_FLAG_CASE = "/flagged-case/comment";

export const API_SET_CASE_STATUS = "/case-status/set-status";


export const API_DEPARTMENT_LISTING = "/department/list";
export const API_DEPARTMENT_ALL_LISTING = "/department/all";
export const API_POSITION_ALL_LISTING = "/position/all";
export const API_POSITION_LISTING = "/position/list";
export const API_POSITION_CREATE = "/position/store";
export const API_POSITION_UPDATE = "/position/update";
export const API_POSITION_DELETE = "/position/delete";
export const API_POSITION_RECREATE = "/position/re-create";
export const API_POSITION_SHOW = "/position/show";
export const API_ROLE_LISTING = "/role/list";

export const API_USER_PERMISSION = "/permission";
export const API_PERMISSION_LISTING = "/permission/list";
export const API_PERMISSION_UPDATE = "/role/update";
export const API_ROLE_CREATE = "/role/store";
export const API_ROLE_ALL_LISTING = "/role/all";


export const API_PROFILE_UPDATE = "/profile/update";

export const API_PASSWORD_UPDATE = "/profile/change-password";
export const API_PERMISSION_USER = "/role/show";

export const API_MY_CASES = "/case/my-cases";

export const API_DISCUSS_CASES_LIST = "/case-status/list";
export const API_CASES_MARK_AS_DISCUSS = "/case/mark-as-discussed";
export const API_USER_PROFILE = "/info";
export const API_USER_CASE_TRANSFER = "/user/switch-all-cases";
export const API_USER_RESTORE = "/user/restore";
export const API_USER_LOGOUT = "/logout";

export const API_ALL_USER_RELATED_USER_DEPARTMENT = "/user-department/allUsers";
export const API_USER_DEPARTMENT_LIST = "/entity-department/userDepartments";
export const API_DEPARTMENT_ENTITIES_LIST = "/entity-department/entities/list";
export const API_DEPARTMENT_GROUP = "/department/groups";
export const API_PROCEDURE_LIST = "/procedure/list";
export const API_GROUP_LIST = "/group/list";
export const API_CASE_CREATE = "/case/store";
export const API_COMORBIDITY_LIST = "/comorbidity/list";
export const API_COMPLICATION_LIST = "/complication/list";
export const API_NOTIFICATION_LIST = "/notification/list";
export const API_NOTIFICATION_CREATE = "/notification/store";
export const API_NOTIFICATION_DELETE = "/notification/delete";



export const API_DEPARTMENT_FILTER = "/department/filter";
export const API_DEPARTMENT_CREATE = "/department/store";
export const API_DEPARTMENT_UPDATE = "/department/update";
export const API_DEPARTMENT_DELETE = "/department/delete";
export const API_DEPARTMENT_SHOW = "/department/show";
export const API_DEPARTMENT_RECREATE = "/department/re-create";
export const API_DEPARTMENT_USER = "/department/all-users";
export const API_DEPARTMENT_USER_HAVE_CASES = "/department/having-cases";
export const API_USERS_DEPARTMENT_CAESES = "/department/all-users-cases";



export const API_DASHBOARD_STATS = "/dashboard";
export const API_POSTION_FILTER = "/position/filter";

export const API_PASSWORD_REQUEST = "reset/password";
export const API_PASSWORD_SET = "/reset-password/update/user/password";
export const API_REQUEST_PASSWORD_USER_LISTING = "/reset-password/list";

export const API_CASE_LOGS_LISTING = "/case-audit/list";
export const API_CASE_LOGS_SHOW = "/case-audit/show";


export const API_APPROVED_CASES_LIST = "/case/approved";
export const API_ARCHIVED_CASES_LIST = "/case/archived";