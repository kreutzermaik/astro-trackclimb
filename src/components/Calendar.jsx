import React, { useState, useEffect } from 'react';
import { supabase } from "../supabase";

const Calendar = () => {
  const [user, setUser] = useState("");

  async function getUser() {
    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('uid', '43bbd925-7ab5-4cec-847f-7a5671d59eb0')
      .single();
    return { user, error };
  }

  useEffect(() => {
    async function fetchUser() {
      let { user, error } = await getUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  return (
    <div>
      {user ? <div>Current user: {user.name}</div> : <div>Loading...</div>}
    </div>
  );
};

export default Calendar;
