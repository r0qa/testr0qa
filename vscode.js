while rad line; do
	set --$line
#$1- фамилия, $2- имя, $3- отчество, $4- логин, $5- пароль
/usr/sbin/addusr-ldap -f $1 -n $2 -c $1 $2 -d /home $4 -s /bin/bash -p $5 -G users, share $4
done <user_list_add
