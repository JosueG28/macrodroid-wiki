# ✨ Magic Text: Call (Active, Ended, Incoming, Missed, Outgoing)

**Call group(s)**
`{call_groups}` - Returns the name(s) of the contact group(s) associated with the caller.  
If the contact belongs to multiple groups, all group names are returned separated by commas.  
*Example:*  
If a call is from a contact in "Work colleagues" and "Friends":  
`{call_groups}` = Work colleagues, Friends

**Call name**  
`{call_name}` - Returns the name of the caller if available in contacts.  
*Example:*  
If you receive a call from "MacroDroid user":  
`{call_name}` = MacroDroid user

**Call number**  
`{call_number}` - Returns the phone number from which the call was received.  
*Example:*  
If you receive a call from the number 1234567890:  
`{call_number}` = 1234567890

**Requires:** The macro must have a call-related trigger (Active, Ended, Incoming, Missed, or Outgoing call).
