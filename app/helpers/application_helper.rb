module ApplicationHelper

  def current_page
    "#{controller_name}##{action_name}"
  end

  def react_application?
    return true if (@react_application == true)
    return false if (@vue_application == true)
    return false
  end

  def vue_application?
    return true if (@vue_application == true)
    return false if (@react_application == true)
    return false
  end

  def default_application?
    return true if (react_application? == false) and (vue_application? == false)
    return false
  end

end
