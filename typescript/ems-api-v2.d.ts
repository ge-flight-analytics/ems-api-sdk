
/**
 * An automatically generated TypeScript definition file with types used in the EMS REST API.
 * Because this file is generated don't make any changes here. Instead re-run the generator.
 */

declare module ems.api.v2 {
    /**
     * Encapsulates metadata information for a parameter or analytic in EMS.
     */
    export interface IMetadata {
        /**
         * The metadata for the object.
         */
        values: ems.api.v2.IMetadataItem[];
    }
    /**
     * Encapsulates a single piece of metadata.
     */
    export interface IMetadataItem {
        /**
         * The metadata key.
         */
        key: string;
        /**
         * The metadata value.
         */
        value: any;
    }
    /**
     * Represents a message used to provide information to users about an action that took place in an API request.
     */
    export interface IApiMessage {
        /**
         * A categorization of the message.
         */
        type: ems.api.v2.admin.ApiMessageType | string;
        /**
         * A string message describing an event that occurred in an API action or event.
         */
        message: string;
    }
}

declare module ems.api.v2.admin {
    /**
     * Represents the supported OAuth grant types that may be associated with an API client.
     */
    const enum ApiClientGrantType {
        /**
         * The "trusted" grant type where an Active Directory attribute name and value pair can be exchanged for
         * a token
         */
        trusted = 0,
        /**
         * The "password" grant type where an Active Directory username and password can be exchanged for a token
         */
        password = 1,
        /**
         * The standard OAuth2.0 grant type where a client provides some information and a redirect URI so that
         * a user can login and be redirected to the client with a token.
         */
        implicit = 2,
    }
    /**
     * Represents the different message types that make up an API message.
     */
    const enum ApiMessageType {
        /**
         * An API action or event was neither a success or failure, but includes a message with information that 
         * could be useful to consumers.
         */
        warning = 0,
        /**
         * An API action or event encountered an error, which was the cause of a 4xx status code response.
         */
        error = 1,
        /**
         * An API action or event was successful.
         */
        success = 2,
    }
    /**
     * Represents an API client application that consumes REST services hosted in the website.
     */
    export interface IApiClient {
        /**
         * The unique integer identifier of the API client
         */
        id: number;
        /**
         * The unique, user friendly, client ID of the client, used when clients request tokens to access the API
         */
        clientId: string;
        /**
         * A brief summary describing the API client and its purpose
         */
        description: string;
        /**
         * The redirect or callback URI for specific grant types (e.g. implicit).
         */
        redirectUri: string;
        /**
         * The grant type that may be used by the client to access the API
         */
        grantType: ems.api.v2.admin.ApiClientGrantType | string;
        /**
         * Indicates whether the API client is active and can currently consume the API
         */
        enabled: boolean;
        /**
         * The date and time at which the API client record was created
         */
        created: string;
        /**
         * The date and time at which the API client record was last updated
         */
        updated: string;
    }
    /**
     * Represents a new API client application that consumes REST services hosted in the website that can be provided
     * when creating a new client record.
     */
    export interface IApiClientNew {
        /**
         * The unique, user friendly, client ID of the client used when clients request tokens to access the API
         */
        clientId: string;
        /**
         * The client secret value used when clients request tokens to access the API
         */
        clientSecret: string;
        /**
         * The grant type that may be used by the client to access the API
         */
        grantType?: ems.api.v2.admin.ApiClientGrantType | string;
        /**
         * An optional brief summary describing the API client and its purpose
         */
        description: string;
        /**
         * The redirect URI for the API client for specific grant types (e.g. implicit)
         */
        redirectUri: string;
    }
    /**
     * Represents an object that can be provided to change an API client's secret value.
     */
    export interface IApiClientSecretReset {
        /**
         * The client secret value used when clients request tokens to access the API
         */
        newClientSecret: string;
    }
    /**
     * Encapsulates the basic properties of a dashboard used by EMS web application users to view EMS-related data.
     */
    export interface IDashboard {
        /**
         * The unique integer identifier of the dashboards.
         */
        id: number;
        /**
         * The title of the dashboard typically rendered in the page header of a displayed dashboard.
         */
        title: string;
        /**
         * A detailed description that describes the contents of the dashboard.
         */
        description: string;
    }
    /**
     * Represents a structure for specifying one or existing dashboard IDs.
     */
    export interface IDashboardIds {
        /**
         * An array specifying one or more unique IDs of existing dashboards.
         */
        ids: number[];
    }
    /**
     * Represents a message used to provide information to users about an action that took place in an API request.
     */
    export interface IDashboardImport {
        /**
         * The deserialized <see cref="Dashboard"/> instance created in the import process.
         */
        dashboard: ems.api.v2.admin.IDashboard;
        /**
         * A list of messages indicating the status of the import and any extra information that may be useful to 
         * convey to a user performing an import.
         */
        messages: any;
        /**
         * A value indicating whether any of the messages included in this instance is an error.
         */
        hasErrors: boolean;
        /**
         * A value indicating whether any of the messages included in this instance is a warning.
         */
        hasWarnings: boolean;
    }
    /**
     * Represents a message used to provide information to users about an action that took place in an API request.
     */
    export interface IDashboardsImport {
        /**
         * The list of imported dashboards and information gathered for each performed import.
         */
        imports: any;
        /**
         * A summary messaged intended to be shown to users of what happened in the import process.
         */
        summary: ems.api.v2.IApiMessage;
    }
    /**
     * Represents an EMS system that can be used and accessed by users of the website.
     */
    export interface IEmsSystem {
        /**
         * The unique integer identifier of the EMS system.
         */
        id: number;
        /**
         * The unique, user friendly, name of the EMS system.
         */
        name: string;
        /**
         * The "Dir Adi" URI where the EMS system installation is located, used to access the EMS system's resources.
         */
        dirAdi: string;
        /**
         * The path to the collection location indicating where data collections for this EMS system should go.
         */
        dirCollection: string;
        /**
         * A brief summary describing the EMS system and its purpose.
         */
        description: string;
    }
    /**
     * Represents a group that is used to control security for website users that are members of the group.
     */
    export interface IGroup {
        /**
         * The unique integer identifier of the group.
         */
        id: number;
        /**
         * The unique, user friendly, name of the group.
         */
        name: string;
        /**
         * A brief summary describing the group and its members and purpose.
         */
        description: string;
    }
    /**
     * Represents a user account that can be used to access the website.
     */
    export interface IUser {
        /**
         * The unique integer identifier of the user.
         */
        id: number;
        /**
         * The Active Directory username of the user, typically in the form of "domain\user.name". If not in an 
         * environment with multiple domains, the domain name is not needed.
         */
        username: string;
        /**
         * Indicates whether the account lockout policy applies to this user, causing them to be locked out of the
         * application for a configured amount of time after failed login attempts.
         */
        lockoutPolicyEnabled: boolean;
        /**
         * The list of roles to which the user is a member.
         */
        roles: any;
        /**
         * The Tableau username to which this user is linked. This user name is only needed if different than the user 
         * name.
         */
        tableauUsername: string;
        /**
         * A read-only value indicating the last time the user logged into the application.
         */
        lastLogin?: string;
        /**
         * A read-only value indicating the time that the user will no longer be locked out. Null if the user is not 
         * currently locked out.
         */
        lockoutEndDateUtc?: string;
        /**
         * A read-only value indicating the number of times the user failed to login.
         */
        accessFailedCount: number;
    }
}

declare module ems.api.v2.alerts {
    /**
     * Input data type for adding to the history of an alert for some entity (e.g. an aircraft)
     */
    export interface IAddActivity {
        /**
         * The timestamp of the data that triggered the alert activity (for instance, if the alert activity
         * was triggered by analysis of a flight, the flight date could be considered the trigger date)
         */
        triggerDate: string;
        /**
         * Specifies whether the alert was/became Active or Inactive at the given trigger date
         */
        isActive: boolean;
        /**
         * A sortable string which orders the alert activity in ascending real-world chronological order
         */
        sortKey: string;
        /**
         * Optional: caller-defined free-form string that identifies the agent which recorded the activity,
         * such as a profile number.
         */
        triggerAgent: string;
        /**
         * Optional: caller-defined information which identifies what type of information
         * is stored in TriggerReferenceValue
         */
        triggerReferenceType: string;
        /**
         * Optional: a record number or other value which is associated with this alert
         * state change. For example, this may be the record number of a flight whose
         * data was the cause of the state change (maybe through an APM alert trigger).
         */
        triggerReferenceValue?: number;
    }
    /**
     * Defines a type of alert that can occur for some asset type
     */
    export interface IDefinition {
        /**
         * The unique id of the definition
         */
        id: string;
        /**
         * The human-readable name for the alert
         */
        displayName: string;
        /**
         * A free-form description of what the alert represents
         */
        description: string;
        /**
         * The schema entity type that the alert applies to (such as Aircraft)
         */
        linkedType: string;
        /**
         * When set to a value greater than 0, alerts in the Active state whose last change was
         * recorded at least this many days ago will be automatically set back to Inactive
         */
        autoResetAfterDays: number;
    }
    /**
     * Output type for getting the activity of an alert, and returned from a call to add alert trigger history.
     */
    export interface IGetActivity {
        /**
         * The timestamp of when the activity record was recorded on the server.
         */
        recordedAt: string;
        /**
         * The timestamp of the data that triggered the alert activity (for instance, if the alert activity
         * was triggered by analysis of a flight, the flight date could be considered the trigger date)
         */
        triggerDate: string;
        /**
         * Specifies whether the alert is Active or Inactive.
         */
        isActive: boolean;
        /**
         * Specifies whether the alert state changed from the previous activity to this activity.
         */
        stateChanged: boolean;
        /**
         * A sortable string which orders the alert activity in ascending real-world chronological order.
         */
        sortKey: string;
        /**
         * Free-form string that identifies the agent which recorded the activity, such as a profile number.
         */
        triggerAgent: string;
        /**
         * Optional: caller-defined information which identifies what type of information
         * is stored in TriggerReferenceValue. When returned from a call to set an alert's
         * state, this is the value provided to that call. When returned from a call to get
         * an alert's state, this is the value from the last time the alert actually changed
         * state (from Active to Inactive or vice versa).
         */
        triggerReferenceType: string;
        /**
         * Optional: a record number or other value which was associated with this alert
         * state change. For example, this may be the record number of a flight whose
         * data was the cause of the state change (maybe through an APM alert trigger).
         * When returned from a call to set an alert's state, this is the value provided to
         * that call. When returned from a call to get an alert's state, this is the value
         * from the last time the alert actually changed state (from Active to Inactive or
         * vice versa).
         */
        triggerReferenceValue?: number;
    }
    /**
     * Contains the information required to create/update an alert definition.
     */
    export interface ISetDefinition {
        /**
         * The human-readable name for the alert
         */
        displayName: string;
        /**
         * A free-form description of what the alert represents
         */
        description: string;
        /**
         * The schema entity type that the alert applies to (such as Aircraft)
         */
        linkedType: string;
        /**
         * When set to a value greater than 0, alerts in the Active state whose last change was
         * recorded at least this many days ago will be automatically set back to Inactive
         */
        autoResetAfterDays: number;
    }
}

declare module ems.api.v2.analytic {
    /**
     * Indicates the type of sampling to use.
     */
    const enum SamplingType {
        /**
         * Sample an analytic where ever sampled values exist. This is the default.
         */
        sampledValues = 0,
        /**
         * Sample an analytic at a determined rate.
         */
        fixedRate = 1,
    }
    /**
     * Represents ways to handle exporting data when a parameter's data is not sampled at a point that is included
     * in the exported data.
     */
    const enum UnsampledDataOption {
        /**
         * Leave values blank, indicating the value at the given point was not sampled.
         */
        leaveBlank = 0,
        /**
         * Leave values blank except when there is a previous valid sampled value that was skipped over due
         * to the sampling rate if the value has changed. This is used to circumvent the issue of possibly 
         * returning all blank values with <see cref="UnsampledDataOption.LeaveBlank"/> when the configured 
         * sampling rate does not coincide with the parameter's sampling rate.
         */
        uniquePreviousSample = 1,
        /**
         * Use the "stair step" method to return the previous valid sampled value in the data.
         */
        stairStep = 2,
        /**
         * Linearly interpolate the value's data based on the last and next valid sampled values in the data.
         */
        linearInterpolation = 3,
        /**
         * Determine the method to use from the information specified in the parameter, if available.
         */
        parameterDefault = 4,
        /**
         * Leave values blank except when there is a previous valid sampled value that was skipped over due
         * to the sampling rate. This is used to circumvent the issue of possibly returning all blank values 
         * with <see cref="UnsampledDataOption.LeaveBlank"/> when the configured sampling rate does not 
         * coincide with the parameter's sampling rate, or leaving blank values with <see cref="UnsampledDataOption.UniquePreviousSample"/>
         * because the value has not changed.
         */
        previousSample = 5,
    }
    /**
     * Represents a group in the exposed tree of analytics for an EMS installation.
     */
    export interface IAnalyticGroup {
        /**
         * The identifier of the group
         */
        id: string;
        /**
         * The name of the group
         */
        name: string;
        /**
         * The description of the group
         */
        description: string;
    }
    /**
     * Represents the contents of an analytic group.
     */
    export interface IAnalyticGroupContents {
        /**
         * An in-order listing of the groups contained in the specified group
         */
        groups: ems.api.v2.analytic.IAnalyticGroup[];
        /**
         * An in-order listing of the analytics contained in the specified group
         */
        analytics: ems.api.v2.analytic.IAnalyticInfo[];
    }
    /**
     * Encapsulates information about an analytic.
     */
    export interface IAnalyticInfo {
        /**
         * The identifier for the analytic
         */
        id: string;
        /**
         * The name of the analytic
         */
        name: string;
        /**
         * The description of the analytic
         */
        description: string;
        /**
         * The units of the analytic
         */
        units: string;
        /**
         * The metadata of the analytic, if requested
         */
        metadata: ems.api.v2.IMetadataItem[];
    }
    /**
     * Provides an identifier for an individual analytic.
     */
    export interface IAnalyticId {
        /**
         * The unique string identifier of the analytic.
         */
        id: string;
    }
    /**
     * Represents the results of a query of an individual analytic, housing the values for the offsets contained
     * in the related query result.
     */
    export interface IAnalyticResult {
        /**
         * The unique string identifier of the analytic queried
         */
        analyticId: string;
        /**
         * The array of analytic values corresponding to offsets specified in the query result
         */
        values: any[];
        /**
         * Any error that may have occurred when retrieving or attempting to retrieve the values for the analytic.
         * This field is only available if there is an error.
         */
        error: string;
    }
    /**
     * Represents an individual analytic that can be selected in a query.
     */
    export interface IAnalyticSelect {
        /**
         * The unique string identifier of the analytic to select in a query
         */
        analyticId: string;
    }
    /**
     * Class for determining which offsets to sample an analytic at.
     */
    export interface IOffsetType {
        /**
         * Determines the way to retrieve samples for an analytic query.
         */
        type: ems.api.v2.analytic.SamplingType | string;
        /**
         * Offsets are calculated using this sampling rate when using 'FixedRate' sampling type.
         */
        samplingRate?: number;
    }
    /**
     * Represents the options used to make up an analytic query.
     */
    export interface IQuery {
        /**
         * An array specifying the analytics to select and return in query results. Use null or an empty array to
         * return only offset values
         */
        select: ems.api.v2.analytic.IAnalyticSelect[];
        /**
         * The optional start offset in the data, in seconds from the start of the data. If not specified, the 
         * beginning of the available data is used
         */
        start?: number;
        /**
         * The optional end offset in the data, in seconds from the start of the data. If not specified, the 
         * end of the available data is used
         */
        end?: number;
        /**
         * The optional set of offsets to return in query results. Use as an alternative to specifying a range of 
         * values using start and end
         */
        offsets: number[];
        /**
         * The optional limit that specifies the total number of offsets and values to return in query results
         */
        size?: number;
        /**
         * This determines how to treat data values for offsets that are not sampled. If left unset this defaults to 'leaveBlank'.
         * This only applies when performing queries using "offsetType"
         */
        unsampledDataMode: ems.api.v2.analytic.UnsampledDataOption | string;
        /**
         * This optional parameter replaces any unsampled (blank) values with a constant value. This defaults to a null value.
         * This only applies when performing queries using "offsetType"
         */
        unsampledValue: string;
        /**
         * This optional parameter replaces any values that come back as DNE (does not exist) with a constant value. This defaults to "DNE".
         * This only applies when performing queries using "offsetType"
         */
        doesNotExistValue: string;
        /**
         * This defines the way in which the offsets are determined. This is required if Offsets or Size has not been set
         */
        offsetType: ems.api.v2.analytic.IOffsetType;
        /**
         * This optional parameter, when set to true, displays discrete values as their respective string values. This defaults to true.
         * This only applies when performing queries using "offsetType"
         */
        discretesAsStrings?: boolean;
    }
    /**
     * Represents the time-series data result of an analytic query.
     */
    export interface IQueryResult {
        /**
         * An array of query result offsets, each representing seconds from the start of the data
         */
        offsets: number[];
        /**
         * An array of analytic result values for each of the analytics selected in the query containing values for
         * each offset
         */
        results: ems.api.v2.analytic.IAnalyticResult[];
    }
    /**
     * Identifies an offset request that specifies the identifier and offsets in a RESTful EMS API request.
     */
    export interface IMultipleByOffsetContents {
        /**
         * The analytic to retrieve.
         */
        id: string;
        /**
         * The offsets for which we want to retrieve values.
         */
        offsets: number[];
    }
}

declare module ems.api.v2.analyticSet {
    /**
     * A collection of analytics. Typically grouped together for graphing in an analytic set.
     */
    export interface IAnalyticCollection {
        /**
         * The name of the AnalyticCollection
         */
        name: string;
        /**
         * An optional description of the AnalyticCollection
         */
        description: string;
        /**
         * An array of the analytics contained in the AnalyticCollection
         */
        items: ems.api.v2.analyticSet.IAnalyticCollectionItem[];
    }
    /**
     * Encapsulates the results of a successfully created analytic collection.
     */
    export interface IAnalyticCollectionCreated {
        /**
         * The name of the AnalyticCollection
         */
        name: string;
        /**
         * The group identifier of the AnalyticCollection
         */
        groupId: string;
        /**
         * The full URL of the newly created AnalyticCollection
         */
        location: string;
    }
    /**
     * A model that encapsulates the data for a single analytic in an analytic collection.
     */
    export interface IAnalyticCollectionItem {
        /**
         * The analytic that is represented by this analytic collection item
         */
        analytic: ems.api.v2.analytic.IAnalyticInfo;
        /**
         * The custom name the user specified for the item, or null if not-specified
         */
        customName: string;
        /**
         * The color to use for the line in hexadecimal color specification "#RRGGBB", or null if no color specified
         */
        color: string;
        /**
         * Optional override for the vertical scale for an analytic
         */
        customRange: any;
        /**
         * Optional override for the number of digits to display
         */
        customDigitsAfterDecimal?: number;
        /**
         * Optional value from 1 to 5 for the width of the line
         */
        lineWidth?: number;
        /**
         * Optional value specifying whether the parameter should display shapes to indicate the sampled values
         */
        displaySampleMarker?: boolean;
        /**
         * If set, describes the shape to use for the sampled values.
         * Possible values: [Square, Circle, Triangle, InvertedTriangle, Cross, Star]
         */
        sampleMarkerShape: string;
        /**
         * If set, describes the line style to use when drawing.
         * Possible values: [Dash, Dot, DashDot, DashDotDot, Solid]
         */
        lineStyle: string;
        /**
         * Whether parameter filtering mode should be enabled for this item or not.
         * possible values: [Default, Enabled, Disabled]
         */
        parameterFilteringMode: string;
        /**
         * The way in which the data should be interpolated.
         * Possible values: [Default, StairStep, Continuous]
         */
        interpolationMode: string;
    }
    /**
     * Encapsulates the data that defines an AnalyticSet.
     */
    export interface IAnalyticSet {
        /**
         * The name of the AnalyticSet
         */
        name: string;
        /**
         * An optional description of the AnalyticSet.
         */
        description: string;
        /**
         * An array of the analytics contained in the AnalyticSet
         */
        items: ems.api.v2.analyticSet.IAnalyticSetItem[];
    }
    /**
     * Encapsulates the results of a successfully created analytic set.
     */
    export interface IAnalyticSetCreated {
        /**
         * The name of the AnalyticSet
         */
        name: string;
        /**
         * The group identifier of the AnalyticSet
         */
        groupId: string;
        /**
         * The full URL of the newly created AnalyticSet
         */
        location: string;
    }
    /**
     * A container for analytic sets.
     */
    export interface IAnalyticSetGroup {
        /**
         * The name of the group
         */
        name: string;
        /**
         * The ID of the group. This should be a relative path with backslashes replaced with colons
         */
        groupId: string;
        /**
         * An array of groups contained by this group
         */
        groups: ems.api.v2.analyticSet.IAnalyticSetGroup[];
        /**
         * An array of analytic sets contained by this group
         */
        sets: ems.api.v2.analyticSet.IAnalyticSet[];
        /**
         * An array of analytic collections contained by this group
         */
        collections: ems.api.v2.analyticSet.IAnalyticCollection[];
    }
    /**
     * The result of a newly created group.
     */
    export interface IAnalyticSetGroupCreated {
        /**
         * The group identifier for the newly created group
         */
        groupId: string;
        /**
         * The URI location for the newly created group
         */
        location: string;
    }
    /**
     * The result of an updated group.
     */
    export interface IAnalyticSetGroupUpdated {
        /**
         * The group identifier of the updated group
         */
        groupId: string;
        /**
         * The URI location of the updated group
         */
        location: string;
    }
    /**
     * A model that encapsulates the data for a single analytic in an analytic set.
     */
    export interface IAnalyticSetItem {
        /**
         * The index of the chart that this analytic info belongs to, or null if no index specified
         */
        chartIndex?: number;
        /**
         * The size of the chart or null if not specified.
         * Possible values: [Normal, Small]
         */
        chartSize: string;
        /**
         * The analytic that is represented by this analytic set item
         */
        analytic: ems.api.v2.analytic.IAnalyticInfo;
        /**
         * The custom name the user specified for the item, or null if not-specified
         */
        customName: string;
        /**
         * The color to use for the line in hexadecimal color specification "#RRGGBB", or null if no color specified
         */
        color: string;
        /**
         * Optional override for the vertical scale for an analytic
         */
        customRange: any;
        /**
         * Optional override for the number of digits to display
         */
        customDigitsAfterDecimal?: number;
        /**
         * Optional value from 1 to 5 for the width of the line
         */
        lineWidth?: number;
        /**
         * Optional value specifying whether the parameter should display shapes to indicate the sampled values
         */
        displaySampleMarker?: boolean;
        /**
         * If set, describes the shape to use for the sampled values.
         * Possible values: [Square, Circle, Triangle, InvertedTriangle, Cross, Star]
         */
        sampleMarkerShape: string;
        /**
         * If set, describes the line style to use when drawing.
         * Possible values: [Dash, Dot, DashDot, DashDotDot, Solid]
         */
        lineStyle: string;
        /**
         * Whether parameter filtering mode should be enabled for this item or not.
         * possible values: [Default, Enabled, Disabled]
         */
        parameterFilteringMode: string;
        /**
         * The way in which the data should be interpolated.
         * Possible values: [Default, StairStep, Continuous]
         */
        interpolationMode: string;
    }
    /**
     * Encapsulates the data for the creation of a new analytic collection.
     */
    export interface INewAnalyticCollection {
        /**
         * The name of the AnalyticCollection
         */
        name: string;
        /**
         * An optional description of the AnalyticCollection
         */
        description: string;
        /**
         * An array of the analytics contained in the AnalyticCollection
         */
        items: ems.api.v2.analyticSet.INewAnalyticCollectionItem[];
    }
    /**
     * A model that encapsulates the data for a single analytic in an analytic collection.
     */
    export interface INewAnalyticCollectionItem {
        /**
         * The analytic identifier that is represented by this analytic collection item
         */
        analyticId: string;
        /**
         * The custom name the user specified for the item, or null if not-specified
         */
        customName: string;
        /**
         * The color to use for the line in hexadecimal color specification "#RRGGBB", or null if no color specified
         */
        color: string;
        /**
         * Optional override for the vertical scale for an analytic
         */
        customRange: any;
        /**
         * Optional override for the number of digits to display
         */
        customDigitsAfterDecimal?: number;
        /**
         * Optional value from 1 to 5 for the width of the line
         */
        lineWidth?: number;
        /**
         * Optional value specifying whether the parameter should display shapes to indicate the sampled values
         */
        displaySampleMarker?: boolean;
        /**
         * If set, describes the shape to use for the sampled values.
         * Possible values: [Square, Circle, Triangle, InvertedTriangle, Cross, Star]
         */
        sampleMarkerShape: string;
        /**
         * If set, describes the line style to use when drawing.
         * Possible values: [Dash, Dot, DashDot, DashDotDot, Solid]
         */
        lineStyle: string;
        /**
         * Whether parameter filtering mode should be enabled for this item or not.
         * possible values: [Default, Enabled, Disabled]
         */
        parameterFilteringMode: string;
        /**
         * The way in which the data should be interpolated.
         * Possible values: [Default, StairStep, Continuous].
         */
        interpolationMode: string;
    }
    /**
     * Encapsulates the data for the creation of a new analytic set.
     */
    export interface INewAnalyticSet {
        /**
         * The name of the AnalyticSet
         */
        name: string;
        /**
         * An optional description of the AnalyticSet
         */
        description: string;
        /**
         * An array of the analytics contained in the AnalyticSet
         */
        items: ems.api.v2.analyticSet.INewAnalyticSetItem[];
    }
    /**
     * The information needed to create a new analytic set group.
     */
    export interface INewAnalyticSetGroup {
        /**
         * The name of the analytic set group
         */
        name: string;
        /**
         * The groupId of the parent group for the new analytic set group
         */
        parentGroupId: string;
    }
    /**
     * A model that encapsulates the data for a single analytic in an analytic set.
     */
    export interface INewAnalyticSetItem {
        /**
         * The index of the chart that this analytic info belongs to, or null if no index specified
         */
        chartIndex?: number;
        /**
         * The size of the chart or null if not specified.
         * Possible values: [Normal, Small]
         */
        chartSize: string;
        /**
         * The analytic identifier that is represented by this analytic set item
         */
        analyticId: string;
        /**
         * The custom name the user specified for the item, or null if not-specified
         */
        customName: string;
        /**
         * The color to use for the line in hexadecimal color specification "#RRGGBB", or null if no color specified
         */
        color: string;
        /**
         * Optional override for the vertical scale for an analytic
         */
        customRange: any;
        /**
         * Optional override for the number of digits to display
         */
        customDigitsAfterDecimal?: number;
        /**
         * Optional value from 1 to 5 for the width of the line
         */
        lineWidth?: number;
        /**
         * Optional value specifying whether the parameter should display shapes to indicate the sampled values
         */
        displaySampleMarker?: boolean;
        /**
         * If set, describes the shape to use for the sampled values.
         * Possible values: [Square, Circle, Triangle, InvertedTriangle, Cross, Star]
         */
        sampleMarkerShape: string;
        /**
         * If set, describes the line style to use when drawing.
         * Possible values: [Dash, Dot, DashDot, DashDotDot, Solid]
         */
        lineStyle: string;
        /**
         * Whether parameter filtering mode should be enabled for this item or not.
         * possible values: [Default, Enabled, Disabled]
         */
        parameterFilteringMode: string;
        /**
         * The way in which the data should be interpolated.
         * Possible values: [Default, StairStep, Continuous].
         */
        interpolationMode: string;
    }
    /**
     * Encapsulates the data for updating an existing analytic collection.
     */
    export interface IUpdateAnalyticCollection {
        /**
         * An optional description of the AnalyticCollection
         */
        description: string;
        /**
         * An array of the analytics contained in the AnalyticCollection
         */
        items: ems.api.v2.analyticSet.INewAnalyticCollectionItem[];
    }
    /**
     * Encapsulates the data for updating an existing analytic set.
     */
    export interface IUpdateAnalyticSet {
        /**
         * An optional description of the AnalyticSet
         */
        description: string;
        /**
         * An array of the analytics contained in the AnalyticSet
         */
        items: ems.api.v2.analyticSet.INewAnalyticSetItem[];
    }
    /**
     * The information for updating an analytic set group.
     */
    export interface IUpdateAnalyticSetGroup {
        /**
         * The name of the analytic set group.
         * This can be the existing name or a new name
         */
        name: string;
        /**
         * The groupId of the parent group for this analytic set group
         */
        parentGroupId: string;
    }
}

declare module ems.api.v2.asset {
    /**
     * An aircraft in the system refers to an airframe with a particular tail number.
     */
    export interface IAircraft {
        /**
         * The identifier of the aircraft within the system
         */
        id: number;
        /**
         * The description for this aircraft
         */
        description: string;
        /**
         * Each aircraft can be mapped to 0-N fleets in the system. 
         * Because a fleet represents a configuration for a airframe and those configurations can change over time,
         * it stands to reason that each aircraft can be mapped to more than one of them
         */
        fleetIds: number[];
        /**
         * Whether this aircraft is active in the system
         */
        isActive: boolean;
        /**
         * Whether this aircraft has been approved
         */
        isApproved: boolean;
        /**
         * Whether this aircraft is enabled for FDW or not
         */
        fdwEnabled: boolean;
        /**
         * Whether this aircraft is enabled for ODW or not
         */
        odwEnabled: boolean;
    }
    /**
     * Encapsulates the definition of an airport.
     */
    export interface IAirport {
        /**
         * The identifier of the airport within the system.
         */
        id: number;
        /**
         * The IATA code associated with this airport.
         */
        codeIata: string;
        /**
         * The ICAO code associated with this airport.
         */
        codeIcao: string;
        /**
         * The FAA / Regional code associated with this airport.
         */
        codeFaa: string;
        /**
         * The preferred code to use for display. This is typically either the ICAO or FAA code, but can be overridden by the user.
         */
        codePreferred: string;
        /**
         * The name of the airport.
         */
        name: string;
        /**
         * The city of the airport.
         */
        city: string;
        /**
         * The country of the airport.
         */
        country: string;
        /**
         * The latitude of the airport.
         */
        latitude: number;
        /**
         * The longitude of the airport.
         */
        longitude: number;
        /**
         * The elevation of the airport, in feet.
         */
        elevation: number;
    }
    /**
     * Represents a 'Fleet' in the EMS system.
     * A fleet in this sense is a group of aircraft using the same configuration.
     * There may be several fleets representing a particular model of aircraft, each showing a specific configuration
     * of the airframe.
     */
    export interface IFleet {
        /**
         * The identifier of the fleet within the system.
         */
        id: number;
        /**
         * The description for this fleet.
         */
        description: string;
    }
    /**
     * A flight phase is a coarse division of a flight into sections, such as takeoff, climb and enroute.
     * The flight phases are used as inputs into some analytics.
     */
    export interface IFlightPhase {
        /**
         * The identifier of the flight phase within the system.
         */
        id: number;
        /**
         * The description for this phase of flight.
         */
        description: string;
    }
}

declare module ems.api.v2.database {
    /**
     * Indicates how the date and time information is encoded in a date time field.
     */
    const enum DateTimeType {
        /**
         * A complete date and time UTC value.
         */
        dateTimeUtc = 0,
        /**
         * UTC date information only (as "year/month/date").
         */
        dateOnlyUtc = 1,
        /**
         * UTC year and month information only (as "year/month").
         */
        yearMonthUtc = 2,
    }
    /**
     * Indicates the data type of a field.
     */
    const enum FieldType {
        /**
         * A data type containing only boolean values.
         */
        boolean = 0,
        /**
         * A data type containing date and/or time.
         */
        dateTime = 1,
        /**
         * A data type representing a map of discrete values.
         */
        discrete = 2,
        /**
         * A data type representing a floating point or integer number.
         */
        number = 3,
        /**
         * A data type representing a string of characters.
         */
        string = 4,
    }
    /**
     * Represents the different types of arguments in a filter.
     */
    const enum FilterArgumentType {
        /**
         * Indicates that the filter argument type wasn't specified or is unknown.
         */
        none = 0,
        /**
         * An argument representing a filter tree with an operation and one or more arguments.
         */
        filter = 1,
        /**
         * An argument representing a reference to a data source field.
         */
        field = 2,
        /**
         * An argument representing a constant value.
         */
        constant = 3,
    }
    /**
     * Indicate the operator used in a data source query to filter the data returned.
     */
    const enum FilterOperator {
        /**
         * Represents the "is true" truth check operator.
         */
        isTrue = 0,
        /**
         * Represents the "is false" truth check operator.
         */
        isFalse = 1,
        /**
         * Represents the "is null" unary operator.
         */
        isNull = 2,
        /**
         * Represents the "not null" unary operator.
         */
        isNotNull = 3,
        /**
         * Represents the "and" boolean operator.
         */
        and = 4,
        /**
         * Represents the "or" boolean operator.
         */
        or = 5,
        /**
         * Represents the "not" boolean operator.
         */
        not = 6,
        /**
         * Represents the "in" collection matching operator.
         */
        in = 7,
        /**
         * Represents the "not in" collection matching operator.
         */
        notIn = 8,
        /**
         * Represents the addition arithmetic operator.
         */
        plus = 9,
        /**
         * Represents the subtraction arithmetic operator.
         */
        minus = 10,
        /**
         * Represents the multiplication arithmetic operator.
         */
        multiply = 11,
        /**
         * Represents the division arithmetic operator.
         */
        divide = 12,
        /**
         * Represents the modulo arithmetic operator.
         */
        modulo = 13,
        /**
         * Represents the equality comparison operator.
         */
        equal = 14,
        /**
         * Represents the inequality comparison operator.
         */
        notEqual = 15,
        /**
         * Represents the "less than" comparison operator.
         */
        lessThan = 16,
        /**
         * Represents the "less than or equal" comparison operator.
         */
        lessThanOrEqual = 17,
        /**
         * Represents the "greater than" comparison operator.
         */
        greaterThan = 18,
        /**
         * Represents the "greater than or equal" comparison operator.
         */
        greaterThanOrEqual = 19,
        /**
         * Represents the "between inclusive" between operator.
         */
        betweenInclusive = 20,
        /**
         * Represents the "between lower exclusive" between operator.
         */
        betweenLowerExclusive = 21,
        /**
         * Represents the "between upper exclusive" between operator.
         */
        betweenUpperExclusive = 22,
        /**
         * Represents the "between exclusive" between operator.
         */
        betweenExclusive = 23,
        /**
         * Represents the "between inclusive" not between operator.
         */
        notBetweenInclusive = 24,
        /**
         * Represents the "between lower exclusive" not between operator.
         */
        notBetweenLowerExclusive = 25,
        /**
         * Represents the "between upper exclusive" not between operator.
         */
        notBetweenUpperExclusive = 26,
        /**
         * Represents the "between exclusive" not between operator.
         */
        notBetweenExclusive = 27,
        /**
         * Represents the "include" integer range operator.
         */
        integerRangeInclude = 28,
        /**
         * Represents the "exclude" integer range operator.
         */
        integerRangeExclude = 29,
        /**
         * Represents the "include" real range operator.
         */
        realRangeInclude = 30,
        /**
         * Represents the "exclude" real range operator.
         */
        realRangeExclude = 31,
        /**
         * Represents the "like" string operator.
         */
        like = 32,
        /**
         * Represents the "not like" string operator.
         */
        notLike = 33,
        /**
         * Represents the "all words" string operator.
         */
        allWords = 34,
        /**
         * Represents the "any words" string operator.
         */
        anyWords = 35,
        /**
         * Represents the "no words" string operator.
         */
        noWords = 36,
        /**
         * Represents the "relative" date operator.
         */
        dateRelative = 37,
        /**
         * Represents the "month range" date operator.
         */
        dateSpecificMonths = 38,
        /**
         * Represents the "specific month" date operator.
         */
        dateSpecificMonth = 39,
        /**
         * Represents the "before month" date operator.
         */
        dateBeforeMonth = 40,
        /**
         * Represents the "on or after month" date operator.
         */
        dateOnAfterMonth = 41,
        /**
         * Represents the "day range" date operator.
         */
        dateSpecificDays = 42,
        /**
         * Represents the "specific day" date operator.
         */
        dateSpecificDay = 43,
        /**
         * Represents the "before day" date operator.
         */
        dateBeforeDay = 44,
        /**
         * Represents the "on or after day" date operator.
         */
        dateOnAfterDay = 45,
        /**
         * Represents the "exact time range" date-time operator.
         */
        dateTimeRange = 46,
        /**
         * Represents the "before exact time" date-time operator.
         */
        dateTimeBefore = 47,
        /**
         * Represents the "on or after exact time" date-time operator.
         */
        dateTimeOnAfter = 48,
        /**
         * Represents the "particular quarter of any year" date operator.
         */
        dateQuarterOfYear = 49,
        /**
         * Represents the "particular month of any year" date operator.
         */
        dateMonthOfYear = 50,
        /**
         * Represents the "particular day of the week" date operator.
         */
        dateDayOfWeek = 51,
        /**
         * Represents the "particular hour of the day" date-time operator.
         */
        dateTimeHourOfDay = 52,
    }
    /**
     * Indicates the suggested method for editing numeric field values.
     */
    const enum NumberEditStyle {
        /**
         * A manual input text box is recommended.
         */
        manualInput = 0,
        /**
         * A numeric slider is recommended.
         */
        slider = 1,
    }
    /**
     * Indicate the way in which numeric field values should be interpreted in query results.
     */
    const enum NumberInterpretation {
        /**
         * The number value represents a piece of data, such as number of years or velocity. Data values can usually 
         * be ordered, added, subtracted, etc.
         */
        dataValue = 0,
        /**
         * The number identifies something, such as a record number. Identifier values generally should not be 
         * manipulated arithmetically.
         */
        identifier = 1,
    }
    /**
     * Indicates the type of aggregation to use when returning a column of data in a data source query result.
     */
    const enum QueryAggregation {
        /**
         * Represents no aggregation.
         */
        none = 0,
        /**
         * Represents an average aggregation type.
         */
        avg = 1,
        /**
         * Represents a count aggregation type.
         */
        count = 2,
        /**
         * Represents a maximum value aggregation type.
         */
        max = 3,
        /**
         * Represents a minimum value aggregation type.
         */
        min = 4,
        /**
         * Represents a statistical standard deviation aggregation type.
         */
        stdev = 5,
        /**
         * Represents a sum aggregation type.
         */
        sum = 6,
        /**
         * Represents a statistical variance aggregation type.
         */
        var = 7,
    }
    /**
     * Indicate the ordering behavior to use in the results returned from a data source query.
     */
    const enum QueryOrderBy {
        /**
         * Result values are returned in ascending order. Note that sorting is always done based on actual result
         * values, not formatted display values that may be configured to be returned.
         */
        asc = 0,
        /**
         * Results values are returned in descending order. Note that sorting is always done based on actual result
         * values, not formatted display values that may be configured to be returned.
         */
        desc = 1,
    }
    /**
     * Indicates the supported types of value formatting that can be applied to query results when they are returned.
     */
    const enum QueryValueFormat {
        /**
         * No value formatting is used. Values returned can be used for further processing or calculations.
         */
        none = 0,
        /**
         * Format values in a format appropriate for displaying values to the user.
         */
        display = 1,
    }
    /**
     * The desired behavior of a relative date filter operator.
     */
    const enum RelativeDateMode {
        /**
         * The current unit (e.g. today, this month, this year).
         */
        current = 0,
        /**
         * The previous N units (e.g. yesterday, last 6 months, last 2 years).
         */
        previous = 1,
        /**
         * The current unit plus N previous units (e.g. today plus the last 6 days).
         */
        currentPlusPrevious = 2,
        /**
         * Before the previous N units (e.g. before yesterday, before the last 6 months).
         */
        beforePrevious = 3,
    }
    /**
     * The date unit to use with a relative date filter operator.
     */
    const enum RelativeDateUnit {
        /**
         * The filter duration value is in minutes.
         */
        minute = 0,
        /**
         * The filter duration value is in hours.
         */
        hour = 6,
        /**
         * The filter duration value is in days.
         */
        day = 1,
        /**
         * The filter duration value is in weeks.
         */
        week = 2,
        /**
         * The filter duration value is in months.
         */
        month = 3,
        /**
         * The filter duration value is in quarters.
         */
        quarter = 4,
        /**
         * The filter duration value is in years.
         */
        year = 5,
    }
    /**
     * Indicates the suggested method for displaying and/or editing values for a string field.
     */
    const enum StringDisplayStyle {
        /**
         * Indicates the values should be displayed and/or edited with a single-line text box.
         */
        singleLine = 0,
        /**
         * Indicates the values should be displayed and/or edited with a multi-line text box.
         */
        multiLine = 1,
    }
    /**
     * The time zone handling to use with a relative date filter.
     */
    const enum TimeZoneHandling {
        /**
         * Convert database DateTime values to local time before performing relative filtering.
         */
        local = 0,
        /**
         * Keep database DateTime values as UTC when performing relative filtering.
         */
        utc = 1,
    }
    /**
     * Updates the swagger schema for this class to fix an issue with the Rows property.
     */
    export module IAsyncQueryData {
        export interface SwaggerSchemaFilter {
        }
    }
    /**
     * Represents the tabular results of a data source query obtained from an async query.
     */
    export interface IAsyncQueryData {
        /**
         * An array of arrays representing the resulting data rows of a query. Each inner array represents a single results row
         */
        rows: string[];
        /**
         * Whether the query has one or more rows in its result set at an index greater than the last row returned
         */
        hasMoreRows: boolean;
    }
    /**
     * Passed back to the client when an async query is started. This contains query header
     * information, and a unique ID, with which the user can later read data for this query.
     */
    export interface IAsyncQueryInfo {
        /**
         * The ID of the query; this will be used when making subsequent calls to the query APIs.
         */
        id: string;
        /**
         * The number of seconds of inactivity after which an async query is eligible for automatic deletion.
         */
        inactivityTimeout: number;
        /**
         * An ordered list of header column information, describing the fields included in the results and matching 
         * the order of columns in the resulting data rows.
         */
        header: ems.api.v2.database.IQueryResultHeader[];
    }
    /**
     * Represents a column to be modified.
     */
    export interface IColumn {
        /**
         * The unique string identifier of the field to modify.
         */
        fieldId: string;
        /**
         * The value for the field.
         */
        value: any;
    }
    /**
     * Represents the options used to make up a data entity creation.
     */
    export interface ICreate {
        /**
         * An array specifying the fields to set during the creation (and their values). This should always include primary key fields.
         */
        createColumns: any[];
    }
    /**
     * Represents the result of an update.
     */
    export interface ICreateResult {
        /**
         * The number of rows added by the creation.
         */
        rowsAdded: number;
    }
    /**
     * Represents a database type exposed by an EMS installation.
     */
    export interface IDatabase {
        /**
         * The unique string identifier for the database
         */
        id: string;
        /**
         * A plural display name for the database
         */
        pluralName: string;
        /**
         * A singular display name for the database
         */
        singularName: string;
        /**
         * The list of primary key fields for the database
         */
        primaryKeyFields: ems.api.v2.database.IPrimaryKeyField[];
    }
    /**
     * Represents a folder in the database tree of an EMS installation.
     */
    export interface IDatabaseGroup {
        /**
         * The unique string identifier for the database group
         */
        id: string;
        /**
         * The display name for the database group
         */
        name: string;
        /**
         * An ordered listing of child database groups contained in this group
         */
        groups: ems.api.v2.database.IDatabaseGroup[];
        /**
         * An ordered listing of child databases contained in this group
         */
        databases: ems.api.v2.database.IDatabase[];
    }
    /**
     * Represents a field storing date time information in a data source.
     */
    export interface IDateTimeField extends ems.api.v2.database.IField {
        /**
         * The type of date time information encoded in the field
         */
        dateTimeType: ems.api.v2.database.DateTimeType | string;
        /**
         * If set to true, the date time values should be displayed in local time format rather than UTC
         */
        dateTimeLocal: boolean;
    }
    /**
     * Represents the options used to make up a data entity deletion.
     */
    export interface IDelete {
        /**
         * A collection of arrays (one for each data entity being deleted) which contains the primary
         * key column and value pairs for the data entity to delete.
         */
        deleteColumns: any[];
    }
    /**
     * Represents the result of an update.
     */
    export interface IDeleteResult {
        /**
         * The number of rows deleted
         */
        rowsDeleted: number;
    }
    /**
     * Represents a field storing discrete information in a data source.
     */
    export interface IDiscreteField extends ems.api.v2.database.IField {
        /**
         * A map of the raw values the discrete field can assume to their user-friendly string representations
         */
        discreteValues: any;
    }
    /**
     * Represents an individual field that can be accessed within a data source.
     */
    export interface IField {
        /**
         * The unique string identifier for the field
         */
        id: string;
        /**
         * The data type of the underlying data stored for the field
         */
        type: ems.api.v2.database.FieldType | string;
        /**
         * The display name for the field
         */
        name: string;
        /**
         * An ordered list of groupIds that make up the path to this field, excluding the root group.
         * The last groupId is the parent group of this field
         */
        path: string[];
        /**
         * An ordered list of group names that make up the path to this field, excluding the root group.
         * The last entry is the parent group of this field
         */
        displayPath: string[];
    }
    /**
     * Represents a folder in the data source tree of an EMS installation.
     */
    export interface IFieldGroup {
        /**
         * The unique string identifier for the field group
         */
        id: string;
        /**
         * The display name for the field group
         */
        name: string;
        /**
         * An ordered list of child groups contained in a field group
         */
        groups: ems.api.v2.database.IFieldGroup[];
        /**
         * An ordered list of groupIds that make up the path to this group, excluding the root group. 
         * The last groupId is the parent group of this group
         */
        path: string[];
        /**
         * An ordered list of child fields contained in a field group
         */
        fields: ems.api.v2.database.IField[];
    }
    /**
     * Represents the operations and arguments that can be used to filter a data source query.
     */
    export interface IFilter {
        /**
         * The unique string identifier of the operation to perform
         */
        operator: ems.api.v2.database.FilterOperator | string;
        /**
         * An ordered list of arguments to provide the operator. The requirements for the arguments depend on which 
         * operation is being performed
         */
        args: ems.api.v2.database.IFilterArgument[];
    }
    /**
     * Represents an argument in a filter.
     */
    export interface IFilterArgument {
        /**
         * The type of the filter argument, describing the role of the argument.
         */
        type: ems.api.v2.database.FilterArgumentType | string;
        /**
         * The value represented by the filter argument.
         */
        value: any;
    }
    /**
     * Represents a column of data that can be used in a group-by clause of a data source query.
     */
    export interface IGroupByColumn {
        /**
         * The unique string identifier of the field to use in a group-by clause of a query
         */
        fieldId: string;
    }
    /**
     * The model representing a new comment to be added.
     */
    export interface INewComment {
        /**
         * The comment text to be added
         */
        comment: string;
        /**
         * The unique identifier of the entity (flight, event, etc.) that the comment is associated with.
         * This is an array since some entity types have compound primary keys (multiple fields).
         * These should be primary key values on the entity's database and should be in order. These should 
         * uniquely identify a single entity
         */
        entityIdentifier: any[];
    }
    /**
     * Represents a field storing numeric information in a data source.
     */
    export interface INumericField extends ems.api.v2.database.IField {
        /**
         * A value indicating the way in which the numeric field values should be interpreted
         */
        numberInterpretation: ems.api.v2.database.NumberInterpretation | string;
        /**
         * The units for the values in the field, e.g. "seconds"
         */
        numberUnits: string;
        /**
         * The minimum value that can be returned in the results for the field
         */
        numberMinValue: number;
        /**
         * The maximum value that can be returned in the results for the field
         */
        numberMaxValue: number;
        /**
         * The suggested method for editing the numeric field values
         */
        numberEditStyle: ems.api.v2.database.NumberEditStyle | string;
    }
    /**
     * Represents a column of data that can be used in a order-by clause of a data source query.
     */
    export interface IOrderByColumn {
        /**
         * The unique string identifier of the field to use in a order-by clause of a query
         */
        fieldId: string;
        /**
         * An optional aggregate operation to perform on the column. Omission of this property results in no aggregate 
         * operation being used in the ordering
         */
        aggregate?: ems.api.v2.database.QueryAggregation | string;
        /**
         * The ordering behavior to use for the column values. The omission of this property results in ascending order
         */
        order?: ems.api.v2.database.QueryOrderBy | string;
    }
    /**
     * Represents a primary key field for a database type exposed by an EMS installation.
     */
    export interface IPrimaryKeyField {
        /**
         * The unique string identifier for the primary key
         */
        id: string;
        /**
         * Suggested name for the primary key field when stored in a column format (if any)
         */
        suggestedColumnName: string;
    }
    /**
     * Represents the options used to make up a data source query.
     */
    export interface IQuery {
        /**
         * An array specifying the fields to select and return as columns in the query results
         */
        select: ems.api.v2.database.ISelectColumn[];
        /**
         * An array specifying the fields by which to group aggregate operations. If not specified, no grouping
         * is performed
         */
        groupBy: ems.api.v2.database.IGroupByColumn[];
        /**
         * An array specifying the selected columns by which to order result rows. Results are always ordered by the
         * results value, not by the display formatted value (configured to be returned by the format property). If
         * not specified, results are returned in default database ordering
         */
        orderBy: ems.api.v2.database.IOrderByColumn[];
        /**
         * A filter used to narrow the query results
         */
        filter: ems.api.v2.database.IFilter;
        /**
         * Value formatting that should be performed on results values before returning. If not specified, no results
         * formatting is performed. This can be overridden by specifying a value for the Format property of a SelectColumn
         */
        format?: ems.api.v2.database.QueryValueFormat | string;
        /**
         * Whether to remove duplicate rows from query results <b>before formatting</b> the results. Using a format
         * value other than 'none' can reduce results precision, leading to cases where two distinct rows appear
         * equivalent after formatting is applied. Defaults to false if not specified
         */
        distinct?: boolean;
        /**
         * Identifies a subset of rows to return.
         * The subset is formed by selecting only the first N rows of the set, where N is a positive integer provided 
         * as the value of this property. If not specified, all rows are returned
         */
        top?: number;
    }
    /**
     * Represents the tabular results of a data source query.
     */
    export interface IQueryResult {
        /**
         * An ordered list of header column information, describing the fields included in the results and matching 
         * the order of columns in the resulting data rows
         */
        header: ems.api.v2.database.IQueryResultHeader[];
        /**
         * An array of arrays representing the resulting data rows of a query. Each inner array represents a single 
         * results row
         */
        rows: any[][];
        /**
         * Indicates whether the rows returned are a partial query result because the maximum amount of rows that can 
         * be returned has been reached.
         */
        isPartialResult: boolean;
    }
    /**
     * Represents a header column in data source query result.
     */
    export interface IQueryResultHeader {
        /**
         * The unique string identifier of the field associated with this column
         */
        id: string;
        /**
         * The user-friendly display name of the field associated with this column
         */
        name: string;
        /**
         * The format applied to the values for the field associated with this column
         */
        format: ems.api.v2.database.QueryValueFormat | string;
        /**
         * The units of values of the field associated with this column. This value may be empty if not applicable
         */
        units: string;
        /**
         * The aggregate operation performed on this column. This value may be empty if not applicable
         */
        aggregate?: ems.api.v2.database.QueryAggregation | string;
    }
    /**
     * Represents a column of data that can be selected in a data source query.
     */
    export interface ISelectColumn {
        /**
         * The unique string identifier of the field to select in a query
         */
        fieldId: string;
        /**
         * An optional aggregate operation to perform on the column. Omission of this property results in no aggregate 
         * operation being performed
         */
        aggregate?: ems.api.v2.database.QueryAggregation | string;
        /**
         * Value formatting that should be performed on this field's value before returning.
         * This will override the query's display value
         */
        format?: ems.api.v2.database.QueryValueFormat | string;
    }
    /**
     * Represents a field storing string information in a data source.
     */
    export interface IStringField extends ems.api.v2.database.IField {
        /**
         * The maximum number of characters in the string. A value of -1 means "largest possible"
         */
        stringLength: number;
        /**
         * The suggested method for displaying and/or editing string field values
         */
        stringDisplayStyle: ems.api.v2.database.StringDisplayStyle | string;
    }
    /**
     * Represents the options used to make up an update.
     */
    export interface IUpdate {
        /**
         * An array specifying the fields to update (and their values).
         */
        updateColumns: ems.api.v2.database.IColumn[];
        /**
         * A filter used to narrow the update results.
         */
        filter: ems.api.v2.database.IFilter;
    }
    /**
     * Represents the result of an update.
     */
    export interface IUpdateResult {
        /**
         * The number of rows affected by the update.
         */
        rowsUpdated: number;
    }
}

declare module ems.api.v2.emsProfile {
    /**
     * Represents an APM (Automated Parameter Measurement) profile in an EMS system.
     */
    export interface IEmsProfile {
        /**
         * The local identifier for a profile
         */
        profileId: number;
        /**
         * The unique identifier of a profile in the system
         */
        profileGuid: string;
        /**
         * The name of the profile
         */
        profileName: string;
        /**
         * Flag for if a profile is a library profile
         */
        library: boolean;
        /**
         * The version of the profile
         */
        currentVersion: number;
        /**
         * Path to the profile's location
         */
        path: string;
    }
    /**
     * Encapsulates all the profile results for a flight.
     */
    export interface IProfileResults {
        /**
         * The numeric version of the profile that was processed to generate the results. This
         * corresponds to an index in the array of version history entries for the profile
         */
        profileVersion: number;
        /**
         * Whether automatic parameter filtering was enabled when the profile was processed
         */
        parameterFiltering: boolean;
        /**
         * The top-level (non-event-based) measurements
         */
        measurements: ems.api.v2.emsProfile.IProfileResultValue[];
        /**
         * The top-level (non-event-based) timepoints
         */
        timepoints: ems.api.v2.emsProfile.IProfileResultValue[];
        /**
         * The events detected in the flight
         */
        events: ems.api.v2.emsProfile.IProfileResultsEventRecord[];
    }
    /**
     * Encapsulates information about a profile results value (measurement or timepoint).
     */
    export interface IProfileResultValue {
        /**
         * The id of the item in the profile.
         */
        itemId: number;
        /**
         * The computed data value for the given item
         */
        dataValue: number;
    }
    /**
     * Encapsulates information about an event result stored in the database.
     */
    export interface IProfileResultsEventRecord {
        /**
         * The unique id of the event in the database
         */
        recordNumber: number;
        /**
         * The unique id of the event definition that generated this event
         */
        eventType: number;
        /**
         * The phase of flight where the event occurred (a value from the EMS POF list)
         */
        phaseOfFlight: number;
        /**
         * The event severity (a value from the EMS Severity list)
         */
        severity: number;
        /**
         * The status of the event (a value from the EMS Status list). Typically this is defaulted to
         * 0 for new events, but in some data-merge scenarios we need to import a non-default value
         * from a remote system
         */
        status: number;
        /**
         * The false positive value for the event (a value from the EMS False Positive list).
         * Typically this is defaulted to 0 for new events, but in some data-merge scenarios we
         * need to import a non-default value from a remote system
         */
        falsePositive: number;
        /**
         * The starting offset for the event.
         * This can be null for computed events where the timepoint or interval aren't set or don't resolve
         */
        startTime?: number;
        /**
         * The ending offset for the event.
         * This can be null for computed events where the timepoint or interval aren't set or don't resolve
         */
        endTime?: number;
        /**
         * The global event measurements (defined for all events)
         */
        globalMeasurements: ems.api.v2.emsProfile.IProfileResultValue[];
        /**
         * The global event timepoints (defined for all events)
         */
        globalTimepoints: ems.api.v2.emsProfile.IProfileResultValue[];
        /**
         * The event-specific measurements (different for each event type)
         */
        localMeasurements: ems.api.v2.emsProfile.IProfileResultValue[];
        /**
         * The event-specific timepoints (different for each event type)
         */
        localTimepoints: ems.api.v2.emsProfile.IProfileResultValue[];
        /**
         * The event comments. Usually this is empty, but it's required for some data-merge
         * scenarios.
         */
        comments: ems.api.v2.emsProfile.IProfileResultComment[];
    }
    /**
     * Encapsulates information about a comment.
     */
    export interface IProfileResultComment {
        /**
         * The user that wrote the comment
         */
        user: string;
        /**
         * The date and time that the comment was added (UTC)
         */
        date: string;
        /**
         * The text of the comment
         */
        comment: string;
    }
}

declare module ems.api.v2.emsProfileGlossary {
    export interface IEmsProfileGlossary {
        /**
         * The version of the EMS glossary the results were generated from.
         */
        glossaryVersion: number;
        /**
         * The local identifier of the profile
         */
        profileId: number;
        /**
         * The unique GUID of the profile in the system
         */
        profileGuid: string;
        /**
         * The version of the associated profile
         */
        currentVersion: number;
        /**
         * The GUID identifier for the version of this profile.
         */
        currentVersionGuid: string;
        /**
         * Array of entries in this glossary.
         */
        glossaryItems: ems.api.v2.emsProfileGlossary.IGlossaryItem[];
    }
    /**
     * Represents a single entry for an item in a profile glossary.
     */
    export interface IGlossaryItem {
        /**
         * A character representing a profile glossary entries record type.
         */
        recordType: string;
        /**
         * A character representing the scope of this entry.
         */
        scope: string;
        /**
         * A unique integer id for this item.
         */
        itemId: number;
        /**
         * The event type id of this item. This is only available for valid event types.
         */
        eventTypeId?: number;
        /**
         * A character representing the data type of this entry.
         */
        dataType?: any;
        /**
         * A GUID defining this item's logical id.
         */
        logicalId: string;
        /**
         * The name provided for this item.
         */
        name: string;
        /**
         * An optional unit provided for this item.
         */
        units: string;
        /**
         * The item type of the first associated item.
         */
        firstAssociatedItemType?: any;
        /**
         * The scope of the first associated item.
         */
        firstAssociatedItemScope?: any;
        /**
         * The item id of the first associated item.
         */
        firstAssociatedItemId?: number;
        /**
         * The item type of the second associated item.
         */
        secondAssociatedItemType?: any;
        /**
         * The scope of the second associated item.
         */
        secondAssociatedItemScope?: any;
        /**
         * The item id of the second associated item.
         */
        secondAssociatedItemId?: number;
    }
}

declare module ems.api.v2.emsSecurable {
    /**
     * Represents a securable item within the EMS environment.
     */
    export interface IEmsSecurable {
        /**
         * The identifier for this securable
         */
        id: string;
        /**
         * The name of this securable
         */
        name: string;
        /**
         * The type for this securable. The type determines which access rights are applicable to the securable
         */
        concreteType: string;
        /**
         * The access rights for this securable
         */
        supportedRights: ems.api.v2.emsSecurable.IEmsSecurableAccessRight[];
    }
    /**
     * An access right that can be applied to a securable.
     */
    export interface IEmsSecurableAccessRight {
        /**
         * The name of the access right
         */
        name: string;
    }
    /**
     * A container for securables and other containers.
     */
    export interface IEmsSecurableContainer {
        /**
         * The name of this container
         */
        name: string;
        /**
         * The child containers of this container
         */
        containers: ems.api.v2.emsSecurable.IEmsSecurableContainer[];
        /**
         * The securable items in this container
         */
        securables: ems.api.v2.emsSecurable.IEmsSecurable[];
    }
    /**
     * Represents the access results for a securable access check request.
     */
    export interface IEmsSecurableEffectiveAccess {
        /**
         * The identifier for the securable
         */
        securableId: string;
        /**
         * The access right for the securable
         */
        accessRight: string;
        /**
         * Whether the user has access or not to the securable and access right
         */
        hasAccess: boolean;
    }
}

declare module ems.api.v2.identification {
    /**
     * Represents the identification information for a flight.
     */
    export interface IIdentification {
        /**
         * The creation time of the identification record
         */
        creationTime: ems.api.v2.identification.IIdentificationField;
        /**
         * The fleet name that this flight is associated with
         */
        fleet: ems.api.v2.identification.IIdentificationField;
        /**
         * The aircraft identifier. This could be the tail number or some other identifier
         */
        aircraftId: ems.api.v2.identification.IIdentificationField;
        /**
         * The aircraft version. This could be nose number or some other value
         */
        aircraftVersion: ems.api.v2.identification.IIdentificationField;
        /**
         * The DAFIF release associated with this flight
         */
        dafifRelease: ems.api.v2.identification.IIdentificationField;
        /**
         * The takeoff airport for the flight
         */
        airportTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The landing airport for the flight
         */
        airportLanding: ems.api.v2.identification.IIdentificationField;
        /**
         * The takeoff airport recorded at takeoff of the flight
         */
        airportTakeoffAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The takeoff airport recorded at the midpoint of the flight
         */
        airportTakeoffAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The takeoff airport recorded at touchdown of the flight
         */
        airportTakeoffAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The landing airport recorded at takeoff of the flight
         */
        airportLandingAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The landing airport recorded at the midpoint of the flight
         */
        airportLandingAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The landing airport recorded at touchdown of the flight
         */
        airportLandingAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The latitude recorded at takeoff of the flight
         */
        latitudeAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The latitude recorded at the midpoint of the flight
         */
        latitudeAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The latitude recorded at touchdown of the flight
         */
        latitudeAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The longitude recorded at takeoff of the flight
         */
        longitudeAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The longitude recorded at midpoint of the flight
         */
        longitudeAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The longitude recorded at touchdown of the flight
         */
        longitudeAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The GMT recorded at takeoff of the flight
         */
        gmtAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The GMT recorded at the midpoint of the flight
         */
        gmtAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The GMT recorded at touchdown of the flight
         */
        gmtAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The day recorded at takeoff of the flight
         */
        dayAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The day recorded at the midpoint of the flight
         */
        dayAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The day recorded at touchdown of the flight
         */
        dayAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The month recorded at takeoff of the flight
         */
        monthAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The month recorded at midpoint of the flight
         */
        monthAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The month recorded at touchdown of the flight
         */
        monthAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The year recorded at takeoff of the flight
         */
        yearAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The year recorded at midpoint of the flight
         */
        yearAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The year recorded at touchdown of the flight
         */
        yearAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The date recorded at takeoff of the flight
         */
        dateAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The date recorded at the midpoint of the flight
         */
        dateAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The date recorded at touchdown of the flight
         */
        dateAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The flight number processed at takeoff of the flight
         */
        flightNumAtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The flight number processed at the midpoint of the flight
         */
        flightNumAtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The flight number processed at touchdown of the flight
         */
        flightNumAtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The flight number recorded at takeoff of the flight
         */
        flightNum1AtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The flight number recorded at the midpoint of the flight
         */
        flightNum1AtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The flight number recorded at touchdown of the flight
         */
        flightNum1AtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * The secondary flight recorded at takeoff of the flight
         */
        flightNum2AtTakeoff: ems.api.v2.identification.IIdentificationField;
        /**
         * The secondary flight recorded at the midpoint of the flight
         */
        flightNum2AtMidpoint: ems.api.v2.identification.IIdentificationField;
        /**
         * The secondary flight number recorded at touchdown of the flight
         */
        flightNum2AtTouchdown: ems.api.v2.identification.IIdentificationField;
        /**
         * Any other identificaton fields
         */
        other: any;
    }
    /**
     * Represents an identifying property of a flight.
     */
    export interface IIdentificationField {
        /**
         * The name of the field
         */
        name: string;
        /**
         * The value of the field for a specific flight
         */
        value: string;
    }
}

declare module ems.api.v2.navigation {
    /**
     * The different types of airport procedures.
     */
    const enum NavigationProcedureType {
        /**
         * All of the procedure types
         */
        all = 0,
        /**
         * The Arrival procedure type
         */
        arrival = 1,
        /**
         * The Departure procedure type
         */
        departure = 2,
        /**
         * The Approach procedure type
         */
        approach = 3,
    }
    /**
     * Procedures for any go arounds.
     * This is not currently supported.
     */
    export interface IGoAroundProcedures {
        /**
         * Any procedures that occurred for the go around
         */
        procedures: ems.api.v2.navigation.INavigationProcedurePlus[];
    }
    /**
     * Procedures for a flight's landing.
     */
    export interface ILandingProcedures {
        /**
         * The approach procedure identifier that was detected for the flight.
         * This defaults to 0 which represents unknown
         */
        detectedApproachId: number;
        /**
         * The approach procedures
         */
        approaches: ems.api.v2.navigation.INavigationProcedurePlus[];
        /**
         * The arrival procedures
         */
        arrivals: ems.api.v2.navigation.INavigationProcedurePlus[];
    }
    /**
     * Information about a single airport.
     */
    export interface INavigationAirport {
        /**
         * The unique identifier for this airport
         */
        id: number;
        /**
         * The name of the airport
         */
        name: string;
        /**
         * The ATA (FAA) code is the US-specific 3-letter identifier (e.g. ORD)
         */
        ataCode: string;
        /**
         * The city of the airport
         */
        city: string;
        /**
         * The country of the airport
         */
        country: string;
        /**
         * The airport code as it should be displayed by EMS apps
         */
        emsCode: string;
        /**
         * The ICAO code is the international 4-letter identifier (e.g. KORD)
         */
        icaoCode: string;
        /**
         * The latitude of the airport
         */
        latitude?: number;
        /**
         * The longitude of the airport
         */
        longitude?: number;
        /**
         * The altitude of the airport
         */
        altitude?: number;
        /**
         * The magnetic variation of the airport
         */
        magneticVariation?: number;
        /**
         * The type of airport (e.g. civil, military)
         */
        type: string;
    }
    /**
     * Navigation procedures for a specific flight.
     */
    export interface INavigationFlightProcedures {
        /**
         * Procedures for the flight's takeoff
         */
        takeoff: ems.api.v2.navigation.ITakeoffProcedures;
        /**
         * Procedures for the flights landing
         */
        landing: ems.api.v2.navigation.ILandingProcedures;
        /**
         * Procedures for any go arounds
         */
        goAround: ems.api.v2.navigation.IGoAroundProcedures;
    }
    /**
     * Various pieces of information associated with a waypoint.
     */
    export interface INavigationNavaid {
        /**
         * The unique identifier of the navaid
         */
        id: number;
        /**
         * The radio callsign of the navaid
         */
        callsign: string;
        /**
         * The navaid type
         */
        type: string;
        /**
         * The navaid's country code
         */
        countryCode: string;
        /**
         * The navaid's state code
         */
        stateCode: number;
        /**
         * The official name of the navaid
         */
        name: string;
        /**
         * The radio frequency of the navaid
         */
        frequency?: number;
        /**
         * The airspace structure in which the navaid is utilized (e.g. high, low, terminal, etc.)
         */
        usageCode: string;
        /**
         * The navaid's radio channel
         */
        channel: string;
        /**
         * The radio class code of the navaid (e.g. low-power NDB, high-power NDB, etc)
         */
        radioClassCode: string;
        /**
         * The effective range of the navaid in nautical miles
         */
        range?: number;
        /**
         * The latitude of the navaid
         */
        latitude?: number;
        /**
         * The longitude of the navaid
         */
        longitude?: number;
        /**
         * The navaid's elevation
         */
        elevation?: number;
        /**
         * The magnetic varation from true north at the navaid
         */
        magneticVariance?: number;
        /**
         * The latitude of the DME equipment colocated with the navaid, if any
         */
        dmeLatitude?: number;
        /**
         * The longitude of the DME equipment colocated with the navaid, if any
         */
        dmeLongitude?: number;
        /**
         * The elevation of the DME equipment colocated with the navaid, if any
         */
        dmeElevation?: number;
        /**
         * The airport code of the associated airport, if any
         */
        associatedAirport: string;
        /**
         * The status of the navaid (e.g. in service, out of service, etc.)
         */
        status: string;
    }
    /**
     * Various pieces of information associated with a procedure.
     */
    export interface INavigationProcedure {
        /**
         * The unique identifier for this procedure
         */
        id: number;
        /**
         * A text value representing the cycle date of the procedure
         */
        cycleDate: string;
        /**
         * The emergency safe altitude of the procedure
         */
        emergencySafeAltitude?: number;
        /**
         * A text identifier of the procedure
         */
        string: string;
        /**
         * The transition altitude of the procedure
         */
        transitionalAltitude?: number;
        /**
         * The transition level of the procedure
         */
        transitionalLevel?: number;
        /**
         * The type of the procedure
         */
        type: string;
    }
    /**
     * A <see cref="NavigationProcedure"/> with some more data. Specifically this nests subtypes, like segments, rather than just including id references.
     */
    export interface INavigationProcedurePlus {
        /**
         * The unique identifier for this procedure
         */
        id: number;
        /**
         * A text value representing the cycle date of the procedure
         */
        cycleDate: string;
        /**
         * The emergency safe altitude of the procedure
         */
        emergencySafeAltitude?: number;
        /**
         * A text identifier of the procedure
         */
        name: string;
        /**
         * The transition altitude of the procedure
         */
        transitionalAltitude?: number;
        /**
         * The transition level of the procedure
         */
        transitionalLevel?: number;
        /**
         * The type of the procedure
         */
        type: string;
        /**
         * The segments associated with this procedure
         */
        segments: ems.api.v2.navigation.INavigationProcedureSegmentPlus[];
    }
    /**
     * Various pieces of information associated with a procedure segment.
     */
    export interface INavigationProcedureSegment {
        /**
         * The segment type
         */
        type: string;
        /**
         * The procedure segment id
         */
        transitionId: string;
        /**
         * The procedure segment sequence number
         */
        sequenceNumber: number;
        /**
         * The procedure segment
         */
        trackCode: string;
        /**
         * The procedure segment waypoint id
         */
        waypointId: number;
        /**
         * The procedure segment waypoint description codes
         */
        waypointDescCodes: string[];
        /**
         * The bearing to the waypoint
         */
        waypointBearing?: number;
        /**
         * The distance to the waypoint
         */
        waypointDistance?: number;
        /**
         * The navaids referenced by this segment
         */
        navaids: ems.api.v2.navigation.INavigationProcedureSegmentNavaid[];
        /**
         * The procedure segment turn direction
         */
        turnDirection: string;
        /**
         * The procedure segment altitude description
         */
        altitudeDescription: string;
        /**
         * The procedure segment altitude 1
         */
        altitude1: string;
        /**
         * The procedure segment altitude 2
         */
        altitude2: string;
    }
    /**
     * A single navaid associated with a procedure segment.
     */
    export interface INavigationProcedureSegmentNavaid {
        /**
         * The ID of the navaid referenced by this segment
         */
        navaidId: number;
        /**
         * The bearing to the navaid
         */
        bearing?: number;
        /**
         * The distance to the navaid
         */
        distance?: number;
    }
    /**
     * A <see cref="NavigationProcedureSegment"/> with some more data. Specifically this nests subtypes, like waypoints, rather than just using id references.
     */
    export interface INavigationProcedureSegmentPlus {
        /**
         * The segment type
         */
        type: string;
        /**
         * The procedure segment id
         */
        transitionId: string;
        /**
         * The procedure segment sequence number
         */
        sequenceNumber: number;
        /**
         * The procedure segment
         */
        trackCode: string;
        /**
         * The procedure segment waypoint id
         */
        waypointId: number;
        /**
         * The procedure segment waypoint description codes
         */
        waypointDescCodes: string[];
        /**
         * The bearing to the waypoint
         */
        waypointBearing?: number;
        /**
         * The distance to the waypoint
         */
        waypointDistance?: number;
        /**
         * The navaids referenced by this segment
         */
        navaids: ems.api.v2.navigation.INavigationProcedureSegmentNavaid[];
        /**
         * The procedure segment turn direction
         */
        turnDirection: string;
        /**
         * The procedure segment altitude description
         */
        altitudeDescription: string;
        /**
         * The procedure segment altitude 1
         */
        altitude1: string;
        /**
         * The procedure segment altitude 2
         */
        altitude2: string;
        /**
         * The procedure segment waypoint
         */
        waypoint: ems.api.v2.navigation.INavigationWaypoint;
    }
    /**
     * Various pieces of information associated with a runway.
     */
    export interface INavigationRunway {
        /**
         * The unique identifier for the runway
         */
        id: number;
        /**
         * The unique identifier of the airport for this runway
         */
        airportId: number;
        /**
         * A text value associated with the runway
         */
        string: string;
        /**
         * The length of the runway
         */
        length?: number;
        /**
         * The width of the runway
         */
        width?: number;
        /**
         * The dafif id of the reciprocal runway (i.e. landing in the opposite direction on this runway)
         */
        oppositeId?: number;
        /**
         * Whether the runway is parallel
         */
        isParallel?: boolean;
        /**
         * The true heading of the runway
         */
        headingTrue?: number;
        /**
         * The magnetic heading of the runway
         */
        headingMagnetic?: number;
        /**
         * The takeoff distance of the runway
         */
        takeoffDistance?: number;
        /**
         * The landing distance of the runway
         */
        landingDistance?: number;
        /**
         * The runway's starting latitude
         */
        latitudeStart?: number;
        /**
         * The runway's ending latitude
         */
        latitudeEnd?: number;
        /**
         * The runway's starting longitude
         */
        longitudeStart?: number;
        /**
         * The runway's ending longitude
         */
        longitudeEnd?: number;
        /**
         * The runway's starting altitude
         */
        altitudeStart?: number;
        /**
         * The runway's ending altitude
         */
        altitudeEnd?: number;
        /**
         * The slope of the runway
         */
        slope?: number;
        /**
         * The threshold displaced value associated with the runway
         */
        thresholdDisplaced?: number;
        /**
         * The threshold latitude value associated with the runway
         */
        thresholdLatitude?: number;
        /**
         * The threshold longitude value associated with the runway
         */
        thresholdLongitude?: number;
        /**
         * The threshold elevation value associated with the runway
         */
        thresholdElevation?: number;
        /**
         * The threshold crossheight value associated with the runway
         */
        thresholdCrossHeight?: number;
        /**
         * The threshold to glideslope distance associated with the runway
         */
        thresholdToGlideslopeDistance?: number;
        /**
         * Bitflags indicating the available lighting for the runway
         */
        lighting: string;
        /**
         * The glideslope angle value associated with the runway
         */
        glideslopeAngle?: number;
        /**
         * The glideslope latitude value associated with the runway
         */
        glideslopeLatitude?: number;
        /**
         * The glideslope longitude value associated with the runway
         */
        glideslopeLongitude?: number;
        /**
         * The glideslope altitude value associated with the runway
         */
        glideslopeAltitude?: number;
        /**
         * The localizer width value associated with the runway
         */
        localizerWidth?: number;
        /**
         * The navaid id of the localizer navaid
         */
        localizerNavaid?: number;
        /**
         * The localizer frequency value associated with the runway
         */
        localizerFrequency?: number;
        /**
         * The backcourse localizer frequency value associated with the runway
         */
        backcourseLocalizerFrequency?: number;
        /**
         * The magnetic heading to fly the ILS
         */
        ilsBearingCourse?: number;
        /**
         * The navid id of the localizer dme
         */
        dmeNavaid?: number;
        /**
         * The DME bias for the runway (the distance in NM from the DME to the landing threshold)
         */
        dmeBias?: number;
        /**
         * The inner marker latitude value associated with the runway
         */
        innerMarkerLatitude?: number;
        /**
         * The inner marker longitude value associated with the runway
         */
        innerMarkerLongitude?: number;
        /**
         * The inner marker altitude value associated with the runway
         */
        innerMarkerAltitude?: number;
        /**
         * The navaid id of the middle marker, if any
         */
        middleMarkerNavaid?: number;
        /**
         * The middle marker latitude value associated with the runway
         */
        middleMarkerLatitude?: number;
        /**
         * The middle marker longitude value associated with the runway
         */
        middleMarkerLongitude?: number;
        /**
         * The middle marker altitude value associated with the runway
         */
        middleMarkerAltitude?: number;
        /**
         * The navaid id of the outer marker, if any
         */
        outerMarkerNavaid?: number;
        /**
         * The outer marker latitude value associated with the runway
         */
        outerMarkerLatitude?: number;
        /**
         * The outer marker longitude value associated with the runway
         */
        outerMarkerLongitude?: number;
        /**
         * The outer marker altitude value associated with the runway
         */
        outerMarkerAltitude?: number;
        /**
         * The navaid id of the compass locator, if any
         */
        locatorNavaid?: number;
        /**
         * The locator latitude value associated with the runway
         */
        locatorLatitude?: number;
        /**
         * The locator longitude value associated with the runway
         */
        locatorLongitude?: number;
        /**
         * The locator altitude value associated with the runway
         */
        locatorAltitude?: number;
    }
    /**
     * Various pieces of information associated with a waypoint.
     */
    export interface INavigationWaypoint {
        /**
         * The unique identifier of the waypoint
         */
        id: number;
        /**
         * The airport id for the waypoint, if any
         */
        airportId: number;
        /**
         * The country code of the waypoint
         */
        countryCode: string;
        /**
         * The type of the waypoint
         */
        type: string;
        /**
         * The name of the waypoint
         */
        name: string;
        /**
         * The ICAO code of the waypoint
         */
        icaoCode: string;
        /**
         * The usage code of the waypoint
         */
        usageCode: string;
        /**
         * The latitude of the waypoint
         */
        latitude?: number;
        /**
         * The longitude of the waypoint
         */
        longitude?: number;
        /**
         * The magnetic variance from true north at the waypoint
         */
        magneticVariance?: number;
        /**
         * The id of the associated navaid, if any
         */
        navaidId?: number;
        /**
         * Flag indicating whether or not the waypoint is colocated with the navaid
         */
        colocationFlag: boolean;
        /**
         * The magnetic bearing from the navaid to the waypoint
         */
        navaidBearing?: number;
        /**
         * The distance from the navaid to the waypoint
         */
        navaidDistance?: number;
        /**
         * The DAFIF text identifier of the waypoint
         */
        dafifId: string;
    }
    /**
     * Procedures for a flight's takeoff.
     */
    export interface ITakeoffProcedures {
        /**
         * The departure procedures
         */
        departures: ems.api.v2.navigation.INavigationProcedurePlus[];
    }
}

declare module ems.api.v2.parameterSet {
    /**
     * Encapsulates the some data defining a ParameterSet.
     */
    export interface IParameterSet {
        /**
         * The name of the ParameterSet.
         */
        name: string;
        /**
         * An optional description of the ParameterSet.
         */
        description: string;
        /**
         * An array of the parameters contained in the ParameterSet.
         */
        items: ems.api.v2.parameterSet.IParameterSetItem[];
    }
    /**
     * A container for parameter sets.
     */
    export interface IParameterSetGroup {
        /**
         * The name of the group.
         */
        name: string;
        /**
         * The id of the group. This should be a relative path.
         */
        groupId: string;
        /**
         * An array of groups contained by this group.
         */
        groups: ems.api.v2.parameterSet.IParameterSetGroup[];
        /**
         * An array of parameter sets contained by this group.
         */
        sets: ems.api.v2.parameterSet.IParameterSet[];
    }
    /**
     * A container for parameter sets.
     */
    export interface IParameterSetItem {
        /**
         * The index of the chart that this analytic info belongs to, or null if no index specified.
         */
        chartIndex?: number;
        /**
         * The analytic that is represented by this parameter set item.
         */
        parameter: ems.api.v2.analytic.IAnalyticInfo;
        /**
         * The custom name the user specified for the item, or null if not-specified.
         */
        customName: string;
        /**
         * The color to use for the line in hexadecimal color specification "#RRGGBB", or null if no color specified.
         */
        color: string;
        /**
         * Optional override for the vertical scale for a parameter.
         */
        customRange: any;
        /**
         * Optional override for the number of digits to display.
         */
        customDigitsAfterDecimal?: number;
        /**
         * Optional value from 1 to 5 for the width of the line.
         */
        lineWidth?: number;
        /**
         * Optional value specifying whether the parameter should display shapes to indicate the sampled values.
         */
        displaySampleMarker?: boolean;
        /**
         * If set, describes the shape to use for the sampled values.
         * Possible values: [Square, Circle, Triangle, InvertedTriangle, Cross, Star]
         */
        sampleMarkerShape: string;
        /**
         * If set, describes the line style to use when drawing.
         * Possible values: [Dash, Dot, DashDot, DashDotDot, Solid]
         */
        lineStyle: string;
    }
}

declare module ems.api.v2.profile {
    /**
     * Represents an APM event definition.
     */
    export interface IEvent {
        /**
         * The definition ID of this event
         */
        id: number;
        /**
         * The name of the event
         */
        name: string;
        /**
         * Comments associated with this event
         */
        comments: string;
        /**
         * The parameter set associated with the event if any
         */
        parameterSet: ems.api.v2.parameterSet.IParameterSet;
    }
    /**
     * Represents an APM (Automated Parameter Measurement) profile in an EMS system.
     */
    export interface IProfile {
        /**
         * The local integer identifier for the profile
         */
        localId: number;
        /**
         * The globally unique identifier of the profile
         */
        id: string;
        /**
         * The display name of the profile
         */
        name: string;
        /**
         * The current location of this profile in the tree as a root-first
         * array of profile groups (only IDs and Names will be filled out)
         */
        treeLocation: ems.api.v2.profileGroup.IProfileGroup[];
        /**
         * Indicates whether the profile is a "library" profile
         */
        library: boolean;
        /**
         * The current integer version of the profile
         */
        currentVersion: number;
    }
    /**
     * Encapsulates all the profile results for a flight.
     */
    export interface IProfileResults {
        /**
         * The integer version of the profile that was processed to generate the results,
         * corresponding to an index in the array of version history entries for the profile
         */
        profileVersion: number;
        /**
         * Indicates whether automatic parameter filtering was enabled when the profile was processed
         */
        parameterFiltering: boolean;
        /**
         * The top-level, non-event-based, measurement results
         */
        measurements: ems.api.v2.profile.IProfileResultValue[];
        /**
         * The top-level, non-event-based, timepoint results
         */
        timepoints: ems.api.v2.profile.IProfileResultValue[];
        /**
         * The event results detected in the flight
         */
        events: ems.api.v2.profile.IProfileResultsEventRecord[];
        /**
         * The processing information of the flight
         */
        processingInformation: ems.api.v2.profile.IProcessingInformation;
    }
    /**
     * Encapsulates information about a profile results value (measurement or timepoint).
     */
    export interface IProfileResultValue {
        /**
         * The integer ID of the result value in the profile
         */
        itemId: number;
        /**
         * The computed data value for the result
         */
        dataValue: number;
    }
    /**
     * Encapsulates information about an event result stored in the database.
     */
    export interface IProfileResultsEventRecord {
        /**
         * The unique integer ID of the event in the database
         */
        recordNumber: number;
        /**
         * The unique ID of the event definition that generated the event
         */
        eventType: number;
        /**
         * The phase of flight where the event occurred (which is a value from the EMS phase of flight list)
         */
        phaseOfFlight: number;
        /**
         * The event severity (which is a value from the EMS severity list)
         */
        severity: number;
        /**
         * The status of the event (which is a value from the EMS status list). Typically this defaults to
         * 0 for new events, but in some data-merge scenarios we need to import a non-default value
         * from a remote system
         */
        status: number;
        /**
         * The false positive value for the event (a value from the EMS false positive list).
         * Typically this defaults to 0 for new events, but in some data-merge scenarios we
         * need to import a non-default value from a remote system
         */
        falsePositive: number;
        /**
         * The start offset for the event.
         * This can be null for computed events where the timepoint or interval aren't set or don't resolve
         */
        startTime?: number;
        /**
         * The end offset for the event.
         * This can be null for computed events where the timepoint or interval aren't set or don't resolve
         */
        endTime?: number;
        /**
         * The global event measurement results (defined for all events)
         */
        globalMeasurements: ems.api.v2.profile.IProfileResultValue[];
        /**
         * The global event timepoint results (defined for all events)
         */
        globalTimepoints: ems.api.v2.profile.IProfileResultValue[];
        /**
         * The event-specific measurement results (different for each event type)
         */
        localMeasurements: ems.api.v2.profile.IProfileResultValue[];
        /**
         * The event-specific timepoint results (different for each event type)
         */
        localTimepoints: ems.api.v2.profile.IProfileResultValue[];
        /**
         * The event comments. Usually this is empty, but it's required for some data-merge
         * scenarios.
         */
        comments: ems.api.v2.profile.IProfileResultComment[];
    }
    /**
     * Encapsulates information about a comment.
     */
    export interface IProfileResultComment {
        /**
         * The user associated with the comment
         */
        user: string;
        /**
         * The date and time the comment was added (UTC)
         */
        date: string;
        /**
         * The text of the comment
         */
        comment: string;
    }
    /**
     * Encapsulates information about processing.
     */
    export interface IProcessingInformation {
        /**
         * The state of the processing.
         */
        processingState: string;
        /**
         * The date and time that the processing occurred (UTC).
         */
        processedDate?: string;
        /**
         * The retry count.
         */
        retryCount: number;
        /**
         * The worker cpu time of the processing in seconds.
         */
        workerCpuTime: number;
        /**
         * The worker wall time of the processing in seconds.
         */
        workerWallTime: number;
        /**
         * The total wall time of the processing in seconds.
         */
        totalWallTime: number;
        /**
         * Whether it is a failure.
         */
        isFailure: boolean;
        /**
         * The failure type.
         */
        failureType: number;
        /**
         * The failure name.
         */
        failureName: string;
    }
}

declare module ems.api.v2.profileGlossary {
    /**
     * Represents a single entry for an item in a profile glossary.
     */
    export interface IGlossaryItem {
        /**
         * A value representing a profile glossary entries record type
         */
        recordType: any;
        /**
         * A value representing the scope of the item
         */
        scope: any;
        /**
         * A unique integer ID for the item
         */
        itemId: number;
        /**
         * The event type ID of the item - this is only available for valid event types
         */
        eventTypeId?: number;
        /**
         * A value representing the data type of the entry
         */
        dataType?: any;
        /**
         * A unique ID defining the item's logical ID
         */
        logicalId: string;
        /**
         * The display name of the item
         */
        name: string;
        /**
         * An optional unit describing how the type of data represented by the item
         */
        units: string;
        /**
         * The item type of the first associated item
         */
        firstAssociatedItemType?: any;
        /**
         * The scope of the first associated item
         */
        firstAssociatedItemScope?: any;
        /**
         * The item id of the first associated item
         */
        firstAssociatedItemId?: number;
        /**
         * The item type of the second associated item
         */
        secondAssociatedItemType?: any;
        /**
         * The scope of the second associated item
         */
        secondAssociatedItemScope?: any;
        /**
         * The item id of the second associated item
         */
        secondAssociatedItemId?: number;
        /**
         * A flag describing if a measurement is saved to the database
         */
        isSavedToDatabase?: boolean;
        /**
         * The comments on the object.
         */
        comments: string;
        /**
         * Additional metadata on the object.
         */
        properties: ems.api.v2.IMetadata;
    }
    /**
     * A glossary for a specific profile. This describes the type of items found in a profile.
     */
    export interface IProfileGlossary {
        /**
         * The integer version of the glossary
         */
        glossaryVersion: number;
        /**
         * The local integer identifier of the associated profile
         */
        profileLocalId: number;
        /**
         * The globally unique identifier of the associated profile
         */
        profileId: string;
        /**
         * The integer version of the associated profile
         */
        currentVersion: number;
        /**
         * The globally unique identifier for the version of the associated profile
         */
        currentVersionGuid: string;
        /**
         * A list of all entries contained in the glossary
         */
        glossaryItems: ems.api.v2.profileGlossary.IGlossaryItem[];
    }
}

declare module ems.api.v2.profileGroup {
    /**
     * Represents a folder in the profile tree of an EMS installation.
     */
    export interface IProfileGroup {
        /**
         * The globally unique ID for the profile group
         */
        id: string;
        /**
         * The display name of the profile group
         */
        name: string;
        /**
         * The optional description that briefly describes the profile group
         */
        description: string;
        /**
         * An ordered listing of child profile groups contained in this group
         */
        groups: ems.api.v2.profileGroup.IProfileGroup[];
        /**
         * An ordered listing of child profiles contained in this group
         */
        profiles: ems.api.v2.profile.IProfile[];
    }
}

declare module ems.api.v2.searchFlights {
    /**
     * Represents the criteria used when searching the database of flights.
     */
    export interface ISearchFlightsCriteria {
        /**
         * A comma-separated list of flight record identifiers.
         * A null string means no filter will be applied.
         */
        flightRecords: string;
        /**
         * The first date for which we should return records. 
         * A null string means no filter will be applied.
         */
        startDateValue: string;
        /**
         * The last date for which we should return records.
         * A null string means no filter will be applied.
         */
        endDateValue: string;
        /**
         * The location that the flight originated from.
         * A null string means no filter will be applied.
         */
        takeoffAirport: string;
        /**
         * The destination of the flight.
         */
        landingAirport: string;
        /**
         * The flight number associated with the flight leg.
         * A null string means no filter will be applied.
         */
        flightNumber: string;
        /**
         * The aircraft (tail number) for the flight.
         * A null string means no filter will be applied.
         */
        aircraft?: number;
        /**
         * The fleet type for this flight.
         */
        fleet?: number;
        /**
         * The maximum number of flights to return in the results set. Defaults to no limit.
         */
        maxFlights?: number;
        /**
         * If true, we will only return results where the flight data exists.
         */
        flightDataExistsFilter?: boolean;
        /**
         * The format requested by the client for the results. This value will be transferred to the 
         * ResultsModel so that the consumer of that model has this value.
         * Ideally, this value would be accessed via the host of the ResultsModel, but because our
         * FlightSearcher renders the HTML server-side this is difficult to do without passing into 
         * the ResultsModel explicitly.
         */
        requestedFormatting: any;
    }
}

declare module ems.api.v2.tableau {
    /**
     * Represents information that can be used to access Tableau content related to an associated Tableau server.
     */
    export interface ITrusted {
        /**
         * The URL that can be used to start a trusted session with the Tableau server.
         */
        trustedUrl: string;
        /**
         * The root URL of the Tableau server with site.
         */
        url: string;
        /**
         * The site that the TrustedUrl is able to access when used.
         */
        site: string;
    }
    /**
     * Represents information about the associated Tableau server.
     */
    export interface ITableauServer {
        /**
         * The root URL of the Tableau server with site.
         */
        url: string;
        /**
         * The site being used.
         */
        site: string;
    }
}

declare module ems.api.v2.trajectory {
    /**
     * Encapsulates a data point defining the userOptions config for a Google Earth export.
     */
    export interface ITrajectoryConfiguration {
        /**
         * A unique identifier for this type of KML trajectory. 
         * Typically this just the name of the file sans extension.
         */
        trajectoryId: string;
        /**
         * A description of what kind of trajectory this KML type generates.
         */
        description: string;
    }
    /**
     * Encapsulates a data point defining the positional information [lat/long/alt] 
     * for a sample and the location it occurred at, in seconds from start of file.
     */
    export interface ITrajectoryValue {
        /**
         * The offset of the value, in seconds from start of file.
         */
        offset: number;
        /**
         * The latitude related to the offset at <see cref="Offset"/>.
         */
        latitude: number;
        /**
         * The longitude related to the offset at <see cref="Offset"/>.
         */
        longitude: number;
        /**
         * The altitude related to the offset at <see cref="Offset"/>.
         */
        altitude: number;
    }
    /**
     * Encapsulates the data returned when requesting trajectory values through the API.
     */
    export interface ITrajectoryValueArray {
        /**
         * The points in the generated trajectory.
         */
        values: ems.api.v2.trajectory.ITrajectoryValue[];
    }
}

declare module ems.api.v2.transfer {
    /**
     * Possible states of an activity in regards to download or flight processing.
     */
    const enum UploadProcessingActivityState {
        /**
         * The activity has not processed the download or flight.
         */
        notProcessed = 0,
        /**
         * The activity has processed the download or flight successfully.
         */
        processed = 1,
        /**
         * The activity has processed the download or flight and failed in doing so.
         */
        failure = 2,
    }
    /**
     * The type of the data to upload.
     */
    const enum UploadType {
        /**
         * The transferred data represents an EMS collection. This should be an unencrypted zip file.
         * It will contain the raw files that will go in data sub-directory in the EMS collection dir. The 
         * transfer's metadata will be used to generate an ident.xml.
         */
        emsCollectionZipped = 0,
        /**
         * The transferred data is just a test and will be discarded as soon as the transfer finishes.
         */
        testTransfer = 1,
        /**
         * The transferred data represents an EMS collection. This file will be used as the entire contents 
         * of the data sub-directory in the EMS collection dir. The transfer's metadata will be used to 
         * generate an ident.xml. The metadata should include a field called "Filename" with the file's
         * original filename (or whatever it should be named in the data sub-directory once it completes).
         */
        emsCollectionRaw = 2,
    }
    /**
     * A list of possible values indicating an upload's current completion status.
     */
    const enum UploadCompleteness {
        /**
         * There was no data at all.
         */
        empty = 0,
        /**
         * We could not retrieve any data at all, even though it's there.
         */
        completeFailure = 1,
        /**
         * All data was retrieved successfully.
         */
        completeSuccess = 2,
        /**
         * We could retrieve some data, and what we could retrieve was good.
         */
        partialGood = 3,
        /**
         * We could retrieve some data, but what we could retrieve was bad.
         */
        partialBad = 4,
        /**
         * The amount of data transferred is unknown.
         */
        unknown = 5,
    }
    /**
     * A list of the possible metadata items that may be used when creating a transfer.
     * Items that are not on this list may also be used and will follow the collection into EMS.
     */
    const enum UploadMetadataType {
        /**
         * The original name of the file, when transferring a non-zipped file. 
         * This should be just a file name and not a file path. It should not include any directories.
         */
        filename = 0,
        /**
         * The volume label of the original media, if applicable.
         */
        mediaVolumeLabel = 1,
        /**
         * The ID of the original media, if applicable.
         */
        mediaID = 2,
        /**
         * Value taken from the UploadCompleteness enum.
         */
        dataCompleteness = 3,
        /**
         * Aircraft ID, if applicable.
         */
        aircraftID = 4,
        /**
         * Comments, if desired.
         */
        comments = 5,
        /**
         * The username of the download user, if applicable.
         */
        downloadUserName = 6,
        /**
         * The location of the download, if applicable.
         */
        downloadLocation = 7,
        /**
         * The machine name of the download, if applicable.
         */
        downloadMachineName = 8,
        /**
         * The number of bytes available on the source media, if applicable; note that if this and
         * OnMedia aren't filled out, the number of bytes in the upload will be used.
         */
        bytesOnMedia = 9,
        /**
         * The number of bytes copied, if applicable; note that if this and OnMedia aren't filled
         * out, the number of bytes in the upload will be used.
         */
        bytesCopied = 10,
        /**
         * Number of skipped files, if applicable.
         */
        skippedFileCount = 11,
    }
    /**
     * The state of the upload.
     */
    const enum UploadState {
        /**
         * The data are still being transferred; the total amount is not equal to the total size yet.
         */
        transferring = 0,
        /**
         * The data have been fully transferred, but post-processing (CRC check, extract, etc) has not been started.
         */
        waitingProcessing = 1,
        /**
         * The data have been fully transferred, but post-processing (CRC check, extract, etc) has not completed yet.
         */
        processing = 2,
        /**
         * The data have been fully ingested successfully. Note that this does not include any EMS status.
         */
        processedSuccess = 3,
        /**
         * The data have been ingested, but not successfully. The transfer will need to be retried.
         */
        processedFailure = 4,
        /**
         * The transfer was left too long with no movement in the Transferring state, and is assumed
         * to be abandoned.
         */
        abandonedTransfer = 5,
        /**
         * The processing was attempted for too long, and is assumed to be permanently broken.
         */
        abandonedProcessing = 6,
        /**
         * The transfer was canceled.
         */
        canceled = 7,
    }
    /**
     * Passed back to the client when a multi-part upload is started. This contains further
     * instructions on how to proceed with the upload, including the transfer ID to pass to
     * future calls, as well as any change of URL for the actual chunk uploads.
     */
    export interface IUploadParameters {
        /**
         * The ID of the transfer; this will be used when making subsequent calls to the upload APIs
         */
        transferId: string;
        /**
         * The URL for the transfer; data block transfers regarding this upload should go to this URL.
         * This may also be an empty string, in which case you should keep using the normal URLs
         */
        url: string;
    }
    /**
     * A single flight result within a larger download result.
     */
    export interface IUploadProcessingFlightStatus {
        /**
         * The flight record for the flight
         */
        flightRecord: number;
        /**
         * A description of the flight record's processing state. This should be checked before assuming
         * that the flight is correct and complete
         */
        flightStatus: ems.api.v2.transfer.UploadProcessingActivityState | string;
    }
    /**
     * Represents the status of an upload processing through EMS.
     */
    export interface IUploadProcessingStatus {
        /**
         * The upload's download record, if known
         */
        downloadRecord?: number;
        /**
         * A description of the download record's processing state. This should be checked before assuming
         * that the download is correct and complete
         */
        downloadState: ems.api.v2.transfer.UploadProcessingActivityState | string;
        /**
         * The upload's flight information, if known
         */
        flights: ems.api.v2.transfer.IUploadProcessingFlightStatus[];
        /**
         * Any error message associated with the processing of the upload, if any
         */
        errorMessage: string;
    }
    /**
     * Represents one record in the list of uploads that we know about on the server side.
     */
    export interface IUploadRecord {
        /**
         * The transfer ID of the transfer, set by the server when the transfer started
         */
        id: string;
        /**
         * The type of the upload
         */
        type: ems.api.v2.transfer.UploadType | string;
        /**
         * Alternate view onto the user's foreign key for simpler usage
         */
        userId: number;
        /**
         * Alternate view onto the EMS system's foreign key for simpler usage
         */
        emsSystemId: number;
        /**
         * Alternate view onto the BucketId foreign key for simpler usage
         */
        bucketId: number;
        /**
         * Name field set by the client when the transfer started
         */
        name: string;
        /**
         * The current number of bytes transferred
         */
        currentCount: number;
        /**
         * The total size of the transfer, if known
         */
        totalSize?: number;
        /**
         * The timestamp of the last time someone uploaded bytes to this transfer. This will
         * be used to determine when a transfer can be aborted automatically
         */
        lastTransfer: any;
        /**
         * The timestamp of the last time someone tried to process this transfer. This will
         * be used to determine when a transfer can be aborted automatically
         */
        lastProcessing: any;
        /**
         * The start time of the transfer, from when the initial start request is made
         */
        startTime: any;
        /**
         * The finish time of the actual data transfer portion of the process
         */
        transferFinishTime?: any;
        /**
         * The finish time of the processing portion of the process
         */
        processingFinishTime?: any;
        /**
         * The state of the upload, up to and including EMS hand-off
         */
        state: ems.api.v2.transfer.UploadState | string;
        /**
         * Metadata for the upload; this is somewhat arbitrary and specific to the type
         * of the transfer, but in any event, it will be a JSON blob with key/value pairs
         */
        metadata: any;
    }
    /**
     * Encapsulates information that will be returned when beginning a new data ingestion transfer.
     */
    export interface IUploadRequest {
        /**
         * The name of the transfer; this is not necessarily unique, and is just what the user passed 
         * when they initiated the transfer.
         */
        name: string;
        /**
         * The type of the upload; this is the handler that we will use to process the uploaded data.
         * The format of the data will be determined by what this upload type is.
         */
        type: ems.api.v2.transfer.UploadType | string;
        /**
         * The password the data is encrypted with, if any. This point of the encryption possibility
         * is that this may be part of a store-and-forward system that stores the data encrypted locally.
         * (Thus passing it here along with the data is not particularly a security issue, but rather
         * a way to avoid having to decrypt it as it transfers.)
         * Note: This is not currently supported with any of the UploadTypes but may be in the future.
         */
        password: string;
        /**
         * The total size of the data to be transferred. This may be absent in the case where the upload
         * is being streamed and the total size is unknown. If provided this allows you to skip making a
         * Finish call to the API to explicitly finish the transfer. Instead a Finish will be inferred
         * when sufficient bytes have been sent.
         */
        totalSize?: number;
        /**
         * Arbitrary metadata attached to the transfer record. This may be used by post-processing later
         * or for other uses. If this is one of the EMS Collection UploadTypes then this information will
         * be added to the generated ident.xml.
         */
        metadata: any;
    }
    /**
     * Summarizes the result of an upload operation.
     */
    export interface IUploadResult {
        /**
         * If this is true, the transfer was successful and also the transferred data are intact.
         * This includes things like verifying the integrity of zip archives, for the overall transfer
         * completion
         */
        transferSuccessful: boolean;
        /**
         * If there was an error, then the error message will describe it. In the case of success, there
         * may also be a message here. This message will be suitable for display to a user
         */
        message: string;
    }
    /**
     * This is sent as a response to an upload transfer status request.
     */
    export interface IUploadStatus {
        /**
         * The current number of bytes the server has received on this transfer.
         */
        currentCount: number;
        /**
         * The state of the upload.
         */
        state: ems.api.v2.transfer.UploadState | string;
        /**
         * Contains a user-readable message about the status of the transfer.
         */
        message: string;
    }
}

declare module ems.api.v2.upload {
    /**
     * The name and description of an upload bucket.
     */
    export interface IBucket {
        /**
         * The name of the bucket. This is unique
         */
        name: string;
        /**
         * Description of the bucket
         */
        description: string;
        /**
         * The EmsSystem that this bucket is associated with. This is used for determining 
         * the EMS Processing status when using the processing status API
         */
        associatedEmsSystem: any;
    }
}

declare module ems.api.v2.weather {
    /**
     * Describes different types of cloud coverage, typically reported in the number of "oktas" that is occupied by 
     * clouds.
     */
    const enum CloudCoverage {
        /**
         * The cloud coverage value wasn't specified or recognized.
         */
        none = 0,
        /**
         * Coverage is "few" clouds (i.e. 1-2 oktas). Typically represented by "FEW" code.
         */
        few = 1,
        /**
         * Coverage is  - "scattered" clouds (i.e. 3-4 oktas). Typically represented by "SCT" or "SKT" codes.
         */
        scattered = 2,
        /**
         * Coverage is "broken" (i.e. 5-7 oktas). Typically represented by "BKN" code.
         */
        broken = 3,
        /**
         * Coverage is "overcast" or full cloud coverage (i.e. 8 oktas). Typically represented by "OVC", "OVCX" or 
         * "OVX" codes.
         */
        overcast = 4,
        /**
         * Specifies the vertical visibility to determine the ceiling when the cloud base is indefinite. Typically
         * represented by "VV" code.
         */
        verticalVisibility = 5,
        /**
         * Coverage is no significant clouds or sky is clear. Typically represented "CLR", "NSC", or "SKC" codes.
         */
        clear = 6,
    }
    /**
     * Describes different types of clouds specified in a METAR forecast.
     */
    const enum CloudType {
        /**
         * The cloud type value wasn't specified or recognized.
         */
        none = 0,
        /**
         * Represents cumulonimbus ("Cb") clouds, which are dense towering clouds, typically associated with 
         * thunderstorms and atmospheric instability.
         */
        cumulonimbus = 1,
        /**
         * Represents towering cumulus ("TCu") clouds, which are typically in an intermediate stage between more 
         * advanced cumulonimbus clouds and lower-level cumulus mediocris clouds.
         */
        toweringCumulis = 2,
        /**
         * Represents cumulus mediocris ("Cu") clouds which are low to middle level clouds with some vertical extent.
         */
        cumulusMediocris = 3,
    }
    /**
     * The time and place that the METAR data would map to for a flight.
     */
    const enum MetarFlightMatchType {
        /**
         * This is used when a METAR is requested that isn't relative to a specific flight.
         */
        none = 0,
        /**
         * This METAR matches to the flight's takeoff airport and time.
         */
        takeoff = 1,
        /**
         * This METAR matches to the flight's landing airport and time.
         */
        landing = 2,
    }
    /**
     * Represents the "braking action" on a runway to describe breaking conditions.
     */
    const enum RunwayBraking {
        /**
         * A breaking condition value wasn't reported or recognized, perhaps due to runway being closed.
         */
        none = -1,
        /**
         * Braking condition values are unreliable, e.g. if equipment has been used which does not measure 
         * satisfactorily in slush or snow (i.e breaking action value of "99").
         */
        unreliable = 0,
        /**
         * Breaking conditions are poor (i.e breaking action value of "91").
         */
        poor = 1,
        /**
         * Breaking conditions are medium/poor (i.e breaking action value of "92").
         */
        mediumPoor = 2,
        /**
         * Breaking conditions are medium (i.e breaking action value of "93").
         */
        medium = 3,
        /**
         * Breaking conditions are medium/good (i.e breaking action value of "94").
         */
        mediumGood = 4,
        /**
         * Breaking conditions are good (i.e breaking action value of "95").
         */
        good = 5,
    }
    /**
     * Describes different coverage of deposits on a runway.
     */
    const enum RunwayCoverage {
        /**
         * A coverage value wasn't reported or recognized, perhaps due to runway clearance or deicing currently in 
         * progress.
         */
        noInformation = -1,
        /**
         * About 10% or less of the runway is covered.
         */
        coverage10Less = 1,
        /**
         * About 11% to 25% of the runway is covered.
         */
        coverage11To25 = 2,
        /**
         * About 26% to 50% of the runway is covered.
         */
        covarege26To50 = 5,
        /**
         * About 51% or more of the runway is covered.
         */
        coverage51To100 = 9,
    }
    /**
     * Describes different types deposits that can appear on a runway.
     */
    const enum RunwayDepositType {
        /**
         * The deposit type value wasn't reported or recognized, perhaps due to runway clearance or deicing currently
         * in progress.
         */
        none = -1,
        /**
         * Runway is clear and dry.
         */
        dry = 0,
        /**
         * Runway is damp.
         */
        damp = 1,
        /**
         * Runway is wet or has water patches.
         */
        wet = 2,
        /**
         * Runway is rime or frost covered (depth normally less than 1mm).
         */
        frost = 3,
        /**
         * Runway has dry snow.
         */
        snowDry = 4,
        /**
         * Runway has wet snow.
         */
        snowWet = 5,
        /**
         * Runway has slush.
         */
        slush = 6,
        /**
         * Runway has ice.
         */
        ice = 7,
        /**
         * Runway has compacted or rolled snow.
         */
        snowCompacted = 8,
        /**
         * Runway has frozen ruts or ridges.
         */
        frozenRuts = 9,
    }
    /**
     * Qualifies a visibility number to designate the visibility of current conditions.
     */
    const enum VisibilityQualifier {
        /**
         * Visibility is less than the specified value.
         */
        lessThan = -1,
        /**
         * Visibility is equal to the specified value.
         */
        equal = 0,
        /**
         * Visibility is greater than the specified value.
         */
        greaterThan = 1,
    }
    /**
     * Describes a trend in weather visibility changes.
     */
    const enum VisibilityTrend {
        /**
         * The trend type wasn't specified or recognized.
         */
        unknown = 0,
        /**
         * Trend indicates visibility is not changing.
         */
        noChange = 1,
        /**
         * Trend indicates visibility is increasing.
         */
        increasing = 2,
        /**
         * Trend indicates visibility is decreasing.
         */
        decreasing = 3,
    }
    /**
     * The type of weather changed that can be specified in a TAF.
     */
    const enum ChangeIndicator {
        /**
         * Change indicator was not specified or recognized.
         */
        none = 0,
        /**
         * Represents "FM" - a from value, specifying a beginning time value.
         */
        from = 1,
        /**
         * Represents "BECMG" - conditions are becoming as described.
         */
        becoming = 2,
        /**
         * Represents "TEMPO" - temporary changes expected.
         */
        temporary = 3,
        /**
         * Represents "PROB" - a probability value of a condition occurring.
         */
        probability = 4,
        /**
         * Represents "INTER" - temporary changes expected, similar to Temporary.
         */
        intermediate = 5,
    }
    /**
     * The time and place that the forecast data would match with for a flight.
     */
    const enum TafFlightMatchType {
        /**
         * This is used when a TAF is requested that isn't relative to a specific flight.
         */
        none = 0,
        /**
         * The forecast matches to the flight's planned takeoff time and was available when the 
         * flight plan was dispatched.
         */
        takeoffAtDispatch = 1,
        /**
         * The forecast matches to the flight's planned landing and was available when the flight
         * plan was dispatched.
         */
        landingAtDispatch = 2,
        /**
         * The forecast matches to the flight's planned alternate landing airport and was available
         * when the flight was dispatched.
         */
        alternateAtDispatch = 3,
        /**
         * The forecast matches to the flight's planned landing airport and was available by the
         * flight's takeoff.
         */
        landingAtTakeoff = 4,
        /**
         * The forecast matches to the flight's planned alternate landing airport and was available
         * by the flight's takeoff.
         */
        alternateAtTakeoff = 5,
        /**
         * The forecast matches to the flight's planned alternate landing airport and was available
         * before landing.
         */
        alternateAtLanding = 6,
    }
    /**
     * Describes different types of weather intensity.
     */
    const enum WeatherIntensity {
        /**
         * The weather has light intensity. Typically represented by code "-".
         */
        light = 0,
        /**
         * The weather has moderate intensity.
         */
        moderate = 1,
        /**
         * The weather has heavy intensity. Typically represented by code "+".
         */
        heavy = 2,
        /**
         * The weather is in the vicinity. Typically represented by code "VC".
         */
        vicinity = 3,
    }
    /**
     * Describes different types of weather obscuration.
     */
    const enum WeatherObscuration {
        /**
         * Weather obscuration was not specified or recognized.
         */
        none = 0,
        /**
         * Mist is present (i.e. visibility greater than or equal to 5/8 of a mile). Typically represented by code "BR".
         */
        mist = 1,
        /**
         * Fog is present (i.e. visibility less than 5/8 of a mile). Typically represented by code "FG".
         */
        fog = 2,
        /**
         * Smoke is present. Typically represented by code "FU".
         */
        smoke = 3,
        /**
         * Volcanic ash is present. Typically represented by code "VA".
         */
        volcanicAsh = 4,
        /**
         * Dust is present. Typically represented by code "DU".
         */
        dust = 5,
        /**
         * Sand is present. Typically represented by code "SA".
         */
        sand = 6,
        /**
         * Haze is present. Typically represented by code "HZ".
         */
        haze = 7,
        /**
         * Spray is present. Typically represented by code "PY".
         */
        spray = 8,
    }
    /**
     * Describes different types of weather beyond regular precipitation.
     */
    const enum WeatherOther {
        /**
         * Weather "other" field was not specified or recognized.
         */
        none = 0,
        /**
         * Well developed dust or sand whirls are present. Typically represented by code "PO".
         */
        dustWhirls = 1,
        /**
         * Squalls (i.e. sudden/violent gusts) are present. Typically represented by code "SQ".
         */
        squalls = 2,
        /**
         * Funnel clouds (i.e. tornado or waterspout) are present. Typically represented by code "FC".
         */
        funnelCloud = 3,
        /**
         * A sandstorm is present. Typically represented by code "SS".
         */
        sandstorm = 4,
        /**
         * A dust storm is present. Typically represented by code "DS".
         */
        duststorm = 5,
    }
    /**
     * Describes different types of weather precipitation.
     */
    const enum WeatherPrecipitation {
        /**
         * Weather precipitation was not specified or recognized.
         */
        none = 0,
        /**
         * Precipitation is a drizzle. Typically represented by code "DZ".
         */
        drizzle = 1,
        /**
         * Precipitation is rain. Typically represented by code "RA".
         */
        rain = 2,
        /**
         * Precipitation is snow. Typically represented by code "SN".
         */
        snow = 3,
        /**
         * Precipitation is snow grains. Typically represented by code "SG".
         */
        snowGrains = 4,
        /**
         * Precipitation is ice crystals. Typically represented by code "IC".
         */
        iceCrystals = 5,
        /**
         * Precipitation is ice pellets. Typically represented by code "PL".
         */
        icePellets = 6,
        /**
         * Precipitation is hail. Typically represented by code "GR".
         */
        hail = 7,
        /**
         * Precipitation is smaller hail or snow pellets. Typically represented by code "GS".
         */
        smallHail = 8,
        /**
         * Precipitation is not known. Typically represented by code "UP".
         */
        unknown = 9,
    }
    /**
     * Describes different types of weather.
     */
    const enum WeatherQualifier {
        /**
         * Weather qualifier was not specified or recognized.
         */
        none = 0,
        /**
         * The weather is shallow. Typically represented by the code "MI".
         */
        shallow = 1,
        /**
         * Weather is partial (covering part of the sky). Typically represented by the code "PR".
         */
        partial = 2,
        /**
         * The weather is patchy. Typically represented by the code "BC".
         */
        patchy = 3,
        /**
         * The weather is drifting low. Typically represented by the code "DR".
         */
        drifting = 4,
        /**
         * The weather is blowing. Typically represented by the code "BL".
         */
        blowing = 5,
        /**
         * Showers are present. Typically represented by the code "SH".
         */
        showers = 6,
        /**
         * Thunderstorms are present. Typically represented by the code "TS".
         */
        thunderstorms = 7,
        /**
         * Weather is freezing. Typically represented by the code "FZ".
         */
        freezing = 8,
    }
    /**
     * Describes the condition of clouds in the sky.
     */
    export interface ICloudCondition {
        /**
         * Specifies the height of the base of a visual portion of a cloud. Uses "Infinity" to designate there is no 
         * limit
         */
        cloudBase?: number;
        /**
         * Describes the types of clouds appearing in the sky
         */
        cloudType?: ems.api.v2.weather.CloudType | string;
        /**
         * Describes the type of cloud cover appearing in the sky
         */
        cloudCoverage: ems.api.v2.weather.CloudCoverage | string;
    }
    /**
     * Specifies options to use when calling the METAR parse API.
     */
    export interface IMetarParseOptions {
        /**
         * The raw METAR string to parse
         */
        metar: string;
        /**
         * Optional date information (in ISO 8601 format) the METAR was issued, since the METAR format only includes
         * day, hour and minute time information.
         */
        issueDate?: any;
    }
    /**
     * Defines the options that can be used to query for METAR reports.
     */
    export interface IMetarQuery {
        /**
         * Optional airport ID for an airport returned by the Assets APIs. If set then ICAO code should not be set
         */
        airportId?: number;
        /**
         * Optional airport ICAO code. If set then airportId should not be set
         */
        airportIcao: string;
        /**
         * Optional date range from filter. If set all METARs issued after this value will be returned
         */
        observationRangeFrom?: string;
        /**
         * Optional date range to filter. If set all METARs issued before this value will be returned
         */
        observationRangeTo?: string;
        /**
         * Optional value indicating the minimum observed visibility in miles
         */
        visibilityMinimum?: number;
        /**
         * Optional value indicating the maximum observed visibility in miles
         */
        visibilityMaximum?: number;
        /**
         * Optional value indicating the minimum observed ceiling in feet
         */
        ceilingMinimum?: number;
        /**
         * Optional value indicating the maximum observed ceiling in feet
         */
        ceilingMaximum?: number;
        /**
         * The maximum number of results to return. If set to 0 all results will be returned. This defaults to 200
         */
        maxResults?: number;
    }
    /**
     * Represents an individual METAR report.
     */
    export interface IMetarReport {
        /**
         * The unparsed but de-identified METAR string
         */
        unparsed: string;
        /**
         * The airport that issued the METAR report
         */
        airport: string;
        /**
         * The day, hour and minute the METAR was issued. May also optionally contain the month and year issued if the
         * date contextual information is available
         */
        issued: string;
        /**
         * Indicates whether the original METAR data was automatically generated
         */
        isAutomatic: boolean;
        /**
         * The wind direction in degrees or, if wind is variable this will be zero
         */
        windDirection?: number;
        /**
         * The wind speed in knots
         */
        windSpeed?: number;
        /**
         * The wind gust speed in knots, if wind gust data is present
         */
        windGustSpeed?: number;
        /**
         * When wind is variable, the approximate end range of the wind direction in degrees
         */
        windDirectionVariableStart?: number;
        /**
         * When wind is variable, the approximate end range of the wind direction in degrees
         */
        windDirectionVariableEnd?: number;
        /**
         * The effective visibility in statute miles
         */
        effectiveVisibility?: number | string;
        /**
         * The exact reported visibility in statute miles. Uses "Infinity" to indicate there is no limit
         */
        exactVisibility?: number;
        /**
         * A qualifier describing the current exact reported visibility
         */
        visibilityQualifier?: ems.api.v2.weather.VisibilityQualifier | string;
        /**
         * A list of runway visual ranges for reported runways
         */
        runwayVisualRanges?: ems.api.v2.weather.IRunwayVisualRange[];
        /**
         * A list of current weather phenomenons
         */
        currentWeather?: ems.api.v2.weather.IWeatherPhenomenon[];
        /**
         * A list of recently occurring weather phenomenons
         */
        recentWeather?: ems.api.v2.weather.IWeatherPhenomenon[];
        /**
         * Indicates whether all current/recent reported weather phenomenons had valid sensor data
         */
        isWeatherDataValid: boolean;
        /**
         * A list of current cloud conditions
         */
        cloudConditions?: ems.api.v2.weather.ICloudCondition[];
        /**
         * The lowest "Broken", "Overcast" or "Vertical Visibility" cloud conditions associated with this object
         */
        ceiling?: ems.api.v2.weather.ICloudCondition;
        /**
         * Indicates whether all reported cloud conditions had valid sensor data
         */
        isCloudDataValid: boolean;
        /**
         * The maximum height of the base of a visual portion of one of the cloud conditions associated with this 
         * object. Uses "Infinity" to indicate there is no limit
         */
        maxCloudHeight?: number;
        /**
         * The current temperature value in degrees Celsius
         */
        temperature?: number;
        /**
         * The current dew point value in degrees Celsius
         */
        dewpoint?: number;
        /**
         * Pressure above ground level in inches of mercury
         */
        pressure?: number;
        /**
         * A list of current runway conditions
         */
        runwayConditions?: ems.api.v2.weather.IRunwayCondition[];
        /**
         * The time and place relative to a specific flight that this METAR data would match to
         */
        flightMatchType?: ems.api.v2.weather.MetarFlightMatchType | string;
    }
    /**
     * Describes the condition of a runway.
     */
    export interface IRunwayCondition {
        /**
         * The original, unparsed runway conditions string
         */
        unparsed: string;
        /**
         * The name/number/approach direction identifying the runway
         */
        runway: string;
        /**
         * The type of deposits currently on the runway
         */
        depositType?: ems.api.v2.weather.RunwayDepositType | string;
        /**
         * The coverage of deposits currently on the runway
         */
        coverage?: ems.api.v2.weather.RunwayCoverage | string;
        /**
         * Indicates the depth of deposits currently on the runway in centimeters
         */
        depth?: number;
        /**
         * The "braking action" value describing the current braking conditions of the runway
         */
        braking?: ems.api.v2.weather.RunwayBraking | string;
        /**
         * The "coefficient of friction" value that alternatively describes the current braking conditions of the 
         * runway
         */
        friction?: number;
        /**
         * Indicating whether the runway conditions are clear of deposits
         */
        isClear: boolean;
    }
    /**
     * Describes the current 10-minute average visual range for a runway, which is the distance over which a pilot
     * can see the runway surface markings.
     */
    export interface IRunwayVisualRange {
        /**
         * The name/number/approach direction identifying the runway
         */
        runway: string;
        /**
         * The primary runway visibility distance in feet. If a variable range is set, this value describes the 
         * minimum visibility distance in a visual range
         */
        visibilityPrimary?: number;
        /**
         * A qualifier describing the primary visibility distance
         */
        visibilityPrimaryQualifier?: ems.api.v2.weather.VisibilityQualifier | string;
        /**
         * The variable runway visibility distance in feet, describing the maximum visibility distance in the 
         * visual range
         */
        visibilityVariable?: number;
        /**
         * A qualifier describing the variable visibility distance
         */
        visibilityVariableQualifier?: ems.api.v2.weather.VisibilityQualifier | string;
        /**
         * The trend of the runway visibility distance
         */
        trend: ems.api.v2.weather.VisibilityTrend | string;
    }
    /**
     * Describes a forecast icing condition.
     */
    export interface IIcingCondition {
        /**
         * The intensity code associated with the icing. Uses the following values: 
         * 0 - Trace icing or none, 
         * 1 - Light mixed icing, 
         * 2 - Light rime icing in cloud, 
         * 3 - Light clear icing in precipitation, 
         * 4 - Moderate mixed icing, 
         * 5 - Moderate rime icing in cloud, 
         * 6 - Moderate clear icing in precipitation, 
         * 7 - Severe mixed icing, 
         * 8 - Severe rime icing in cloud, 
         * 9 - Severe clear icing in precipitation
         */
        intensity: number;
        /**
         * The base limit of the icing layer in feet
         */
        minimum?: number;
        /**
         * The top limit of the icing layer in feet
         */
        maximum?: number;
    }
    /**
     * Represents a forecast prediction originally included in a TAF.
     */
    export interface IPrediction {
        /**
         * The ID used to uniquely identify this prediction on an EMS system
         */
        id?: number;
        /**
         * The original, unparsed prediction string
         */
        unparsed: string;
        /**
         * The predicted start time for the weather in this prediction
         */
        timeFrom?: any;
        /**
         * The predicted end time for the weather in this prediction. This is defined by the following predictions start time
         * or if it's the last prediction in a TAF it is the end of the validity window
         */
        timeTo?: any;
        /**
         * The time that the prediction weather is expected to occur. This is only used with the "Becoming" change 
         * indicator
         */
        timeBecoming?: any;
        /**
         * The type of conditions change indicator specified. When weather conditions are reported as changing this
         * is "None"
         */
        weatherChange: ems.api.v2.weather.ChangeIndicator | string;
        /**
         * The probability of the weather described in this prediction occurring
         */
        probability?: number;
        /**
         * The wind direction in degrees or, if wind is variable this will be zero
         */
        windDirection?: number;
        /**
         * The wind speed in knots
         */
        windSpeed?: number;
        /**
         * The wind gust speed in knots, if wind gust data is present
         */
        windGustSpeed?: number;
        /**
         * The wind shear height in feet, if wind shear data is present
         */
        windShearHeight?: number;
        /**
         * The wind shear direction in degrees, if wind shear data is present
         */
        windShearDirection?: number;
        /**
         * The wind shear speed in knots, if wind shear data is present
         */
        windShearSpeed?: number;
        /**
         * The horizontal visibility in statute miles. Uses "Infinity" to indicate there is no limit
         */
        visibilityHorizontal?: number | string;
        /**
         * The vertical visibility in feet above ground level
         */
        visibilityVertical?: number;
        /**
         * Pressure above ground level in inches of mercury
         */
        pressure?: number;
        /**
         * Any parts of the raw prediction string that were unable to be decoded
         */
        portionNotDecoded: string;
        /**
         * The lowest altitude of "Broken" or "Overcast" cloud conditions or vertical visibility. Uses "Infinity" to 
         * indicate there is no limit
         */
        ceiling?: number;
        /**
         * A list of cloud conditions occurring during the prediction
         */
        cloudConditions?: ems.api.v2.weather.ICloudCondition[];
        /**
         * A list of icing conditions occurring during the prediction
         */
        icingConditions?: ems.api.v2.weather.IIcingCondition[];
        /**
         * A list of turbulence conditions occurring during the prediction
         */
        turbulenceConditions?: ems.api.v2.weather.ITurbulenceCondition[];
        /**
         * A list of temperature conditions occurring during the prediction
         */
        temperatures?: ems.api.v2.weather.ITemperature[];
    }
    /**
     * Specifies options to use when calling the TAF parse API.
     */
    export interface ITafParseOptions {
        /**
         * The raw TAF string to parse
         */
        taf: string;
        /**
         * Date information (in ISO 8601 format) the TAF was issued, since the TAF format doesn't include this 
         * information
         */
        issueDate?: any;
    }
    /**
     * Defines the options that can be used to query for TAF reports.
     */
    export interface ITafQuery {
        /**
         * Optional airport ID for an airport returned by the Assets APIs. If set then ICAO code should not be set
         */
        airportId?: number;
        /**
         * Optional airport ICAO code. If set then airportId should not be set
         */
        airportIcao: string;
        /**
         * Optional date range from filter. If set all TAFs issued after this value will be returned
         */
        issueRangeFrom?: string;
        /**
         * Optional date range to filter. If set all TAFs issued before this value will be returned
         */
        issueRangeTo?: string;
        /**
         * Optional date range from filter. If set any TAF that is valid from this point to validRangeTo
         * will be returned. If set validRangeTo must also be set
         */
        validRangeFrom?: string;
        /**
         * Optional date range from filter. If set any TAF that is valid to this point from validRangeFrom
         * will be returned. If set validRangeFrom must also be set
         */
        validRangeTo?: string;
        /**
         * Optional single time point for which to return all valid TAFs
         */
        validTime?: string;
        /**
         * Optional value indicating the minimum observed visibility in miles. Since TAFs have multiple visibility values if any one value in the TAF meets 
         * this criteria that TAF will be returned
         */
        visibilityMinimum?: number;
        /**
         * Optional value indicating the maximum observed visibility in miles. Since TAFs have multiple visibility values if any one value in the TAF meets 
         * this criteria that TAF will be returned
         */
        visibilityMaximum?: number;
        /**
         * Optional value indicating the minimum observed ceiling in feet. Since TAFs have multiple visibility values if any one value in the TAF meets 
         * this criteria that TAF will be returned
         */
        ceilingMinimum?: number;
        /**
         * Optional value indicating the maximum observed ceiling in feet. Since TAFs have multiple visibility values if any one value in the TAF meets 
         * this criteria that TAF will be returned
         */
        ceilingMaximum?: number;
        /**
         * The maximum number of results to return. If set to 0 all results will be returned. This defaults to 200
         */
        maxResults?: number;
    }
    /**
     * Represents an individual TAF report.
     */
    export interface ITafReport {
        /**
         * Error messages delimited by newlines if there were non-critical issues parsing the raw TAF string
         */
        parseErrors?: string;
        /**
         * The time point that this TAF report was issued
         */
        issued: any;
        /**
         * The airport that issued the TAF report
         */
        airport: string;
        /**
         * The starting time point that this TAF report is valid
         */
        validFrom: any;
        /**
         * The ending time point that this TAF report is valid
         */
        validTo: any;
        /**
         * A list of forecast predictions in the TAF
         */
        predictions: ems.api.v2.weather.IPrediction[];
        /**
         * The header text for the TAF
         */
        headerText: string;
        /**
         * The time and place relative to a specific flight that this forecast data would match to
         */
        flightMatchType?: ems.api.v2.weather.TafFlightMatchType | string;
        /**
         * The forecast data that matches to a specific flight
         */
        matchedPrediction?: ems.api.v2.weather.IPrediction;
    }
    /**
     * Describes a forecast temperature.
     */
    export interface ITemperature {
        /**
         * Describes the time at which the temperature forecast is valid
         */
        validTime?: any;
        /**
         * The expected surface temperature value
         */
        surface?: number;
        /**
         * The expected maximum temperature value
         */
        maximum?: number;
        /**
         * The expected minimum temperature value
         */
        minimum?: number;
    }
    /**
     * Describes a forecast turbulence condition.
     */
    export interface ITurbulenceCondition {
        /**
         * The intensity code associated with the turbulence. Uses the following values: 
         * 0 - None, 
         * 1 - Light turbulence, 
         * 2 - Moderate turbulence in clear air (occasional),
         * 3 - Moderate turbulence in clear air (frequent),
         * 4 - Moderate turbulence in cloud (occasional), 
         * 5 - Moderate turbulence in cloud (frequent),
         * 6 - Severe turbulence in clear air (occasional),
         * 7 - Severe turbulence in clear air (frequent),
         * 8 - Severe turbulence in cloud (occasional),
         * 9 - Severe turbulence in cloud (frequent)
         */
        intensity: number;
        /**
         * The base limit of the turbulence layer in feet
         */
        minimum?: number;
        /**
         * The top limit of the turbulence layer in feet
         */
        maximum?: number;
    }
    /**
     * Represents forecast weather conditions.
     */
    export interface IWeather {
        /**
         * The original, unparsed weather data string
         */
        unparsed: string;
        /**
         * The list of weather phenomenons present in the weather conditions
         */
        phenomenons: ems.api.v2.weather.IWeatherPhenomenon[];
    }
    /**
     * Describes an individual weather phenomenon.
     */
    export interface IWeatherPhenomenon {
        /**
         * The original, unparsed weather phenomenon string
         */
        unparsed: string;
        /**
         * Describes the intensity of the whether phenomenon
         */
        intensity: ems.api.v2.weather.WeatherIntensity | string;
        /**
         * A qualifier for any weather precipitation
         */
        qualifier: ems.api.v2.weather.WeatherQualifier | string;
        /**
         * The type of precipitation that this phenomenon represents
         */
        precipitation: ems.api.v2.weather.WeatherPrecipitation | string;
        /**
         * The secondary type of precipitation that can be optionally specified to more accurately describe the 
         * precipitation
         */
        precipitationSecondary: ems.api.v2.weather.WeatherPrecipitation | string;
        /**
         * Any weather that can obscure vision
         */
        obscuration: ems.api.v2.weather.WeatherObscuration | string;
        /**
         * Other weather cases that do not fall under precipitation
         */
        other: ems.api.v2.weather.WeatherOther | string;
    }
    /**
     * Represents TAF and METAR weather reports collected by an EMS system.
     */
    export interface IWeatherReport {
        /**
         * A list of collected TAF reports from an EMS system
         */
        tafReports: ems.api.v2.weather.ITafReport[];
        /**
         * A list of collected METAR reports from an EMS system
         */
        metarReports: ems.api.v2.weather.IMetarReport[];
    }
}
