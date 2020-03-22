PGDMP         8                x         	   Noticrawl    12.2    12.2 (    4           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            5           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            6           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            7           1262    16405 	   Noticrawl    DATABASE     �   CREATE DATABASE "Noticrawl" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Polish_Poland.1250' LC_CTYPE = 'Polish_Poland.1250';
    DROP DATABASE "Noticrawl";
                postgres    false            8           0    0    DATABASE "Noticrawl"    COMMENT        COMMENT ON DATABASE "Noticrawl" IS 'Noticrawl database: 
user''s personal data 
chosen links
crawling scripts
notifications ';
                   postgres    false    2871            w           1247    16589    communicators    TYPE     R   CREATE TYPE public.communicators AS ENUM (
    'email',
    'slack',
    'idk'
);
     DROP TYPE public.communicators;
       public          postgres    false            �            1259    16632    links    TABLE     �   CREATE TABLE public.links (
    link_id integer NOT NULL,
    url_address character varying(2048) NOT NULL,
    description character varying(1000),
    user_id integer NOT NULL
);
    DROP TABLE public.links;
       public         heap    postgres    false            �            1259    16628    links_link_id_seq    SEQUENCE     �   CREATE SEQUENCE public.links_link_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.links_link_id_seq;
       public          postgres    false    206            9           0    0    links_link_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.links_link_id_seq OWNED BY public.links.link_id;
          public          postgres    false    204            �            1259    16630    links_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.links_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.links_user_id_seq;
       public          postgres    false    206            :           0    0    links_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.links_user_id_seq OWNED BY public.links.user_id;
          public          postgres    false    205            �            1259    16670    notification    TABLE     �   CREATE TABLE public.notification (
    notification_id integer NOT NULL,
    address character varying(255),
    communicator public.communicators NOT NULL,
    script_id integer NOT NULL
);
     DROP TABLE public.notification;
       public         heap    postgres    false    631            �            1259    16666     notification_notification_id_seq    SEQUENCE     �   CREATE SEQUENCE public.notification_notification_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public.notification_notification_id_seq;
       public          postgres    false    212            ;           0    0     notification_notification_id_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public.notification_notification_id_seq OWNED BY public.notification.notification_id;
          public          postgres    false    210            �            1259    16668    notification_script_id_seq    SEQUENCE     �   CREATE SEQUENCE public.notification_script_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.notification_script_id_seq;
       public          postgres    false    212            <           0    0    notification_script_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.notification_script_id_seq OWNED BY public.notification.script_id;
          public          postgres    false    211            �            1259    16651    script    TABLE     }   CREATE TABLE public.script (
    script_id integer NOT NULL,
    instructions text NOT NULL,
    link_id integer NOT NULL
);
    DROP TABLE public.script;
       public         heap    postgres    false            �            1259    16649    script_link_id_seq    SEQUENCE     �   CREATE SEQUENCE public.script_link_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.script_link_id_seq;
       public          postgres    false    209            =           0    0    script_link_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.script_link_id_seq OWNED BY public.script.link_id;
          public          postgres    false    208            �            1259    16647    script_script_id_seq    SEQUENCE     �   CREATE SEQUENCE public.script_script_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.script_script_id_seq;
       public          postgres    false    209            >           0    0    script_script_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.script_script_id_seq OWNED BY public.script.script_id;
          public          postgres    false    207            �            1259    16616 	   user_data    TABLE     �  CREATE TABLE public.user_data (
    user_id integer NOT NULL,
    user_name character varying(30) NOT NULL,
    email character varying(255) NOT NULL,
    user_password character varying(128) NOT NULL,
    CONSTRAINT user_data_email_check CHECK (((email)::text = '%@%.%'::text)),
    CONSTRAINT user_data_user_password_check CHECK (((user_password)::text > 'poprawnehaslo'::text))
);
    DROP TABLE public.user_data;
       public         heap    postgres    false            �            1259    16614    user_data_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_data_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.user_data_user_id_seq;
       public          postgres    false    203            ?           0    0    user_data_user_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.user_data_user_id_seq OWNED BY public.user_data.user_id;
          public          postgres    false    202            �
           2604    16635    links link_id    DEFAULT     n   ALTER TABLE ONLY public.links ALTER COLUMN link_id SET DEFAULT nextval('public.links_link_id_seq'::regclass);
 <   ALTER TABLE public.links ALTER COLUMN link_id DROP DEFAULT;
       public          postgres    false    204    206    206            �
           2604    16636    links user_id    DEFAULT     n   ALTER TABLE ONLY public.links ALTER COLUMN user_id SET DEFAULT nextval('public.links_user_id_seq'::regclass);
 <   ALTER TABLE public.links ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    205    206    206            �
           2604    16673    notification notification_id    DEFAULT     �   ALTER TABLE ONLY public.notification ALTER COLUMN notification_id SET DEFAULT nextval('public.notification_notification_id_seq'::regclass);
 K   ALTER TABLE public.notification ALTER COLUMN notification_id DROP DEFAULT;
       public          postgres    false    210    212    212            �
           2604    16674    notification script_id    DEFAULT     �   ALTER TABLE ONLY public.notification ALTER COLUMN script_id SET DEFAULT nextval('public.notification_script_id_seq'::regclass);
 E   ALTER TABLE public.notification ALTER COLUMN script_id DROP DEFAULT;
       public          postgres    false    211    212    212            �
           2604    16654    script script_id    DEFAULT     t   ALTER TABLE ONLY public.script ALTER COLUMN script_id SET DEFAULT nextval('public.script_script_id_seq'::regclass);
 ?   ALTER TABLE public.script ALTER COLUMN script_id DROP DEFAULT;
       public          postgres    false    207    209    209            �
           2604    16655    script link_id    DEFAULT     p   ALTER TABLE ONLY public.script ALTER COLUMN link_id SET DEFAULT nextval('public.script_link_id_seq'::regclass);
 =   ALTER TABLE public.script ALTER COLUMN link_id DROP DEFAULT;
       public          postgres    false    209    208    209            �
           2604    16619    user_data user_id    DEFAULT     v   ALTER TABLE ONLY public.user_data ALTER COLUMN user_id SET DEFAULT nextval('public.user_data_user_id_seq'::regclass);
 @   ALTER TABLE public.user_data ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    202    203    203            �
           2606    16641    links links_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (link_id);
 :   ALTER TABLE ONLY public.links DROP CONSTRAINT links_pkey;
       public            postgres    false    206            �
           2606    16676    notification notification_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.notification
    ADD CONSTRAINT notification_pkey PRIMARY KEY (notification_id);
 H   ALTER TABLE ONLY public.notification DROP CONSTRAINT notification_pkey;
       public            postgres    false    212            �
           2606    16660    script script_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.script
    ADD CONSTRAINT script_pkey PRIMARY KEY (script_id);
 <   ALTER TABLE ONLY public.script DROP CONSTRAINT script_pkey;
       public            postgres    false    209            �
           2606    16627    user_data user_data_email_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_email_key UNIQUE (email);
 G   ALTER TABLE ONLY public.user_data DROP CONSTRAINT user_data_email_key;
       public            postgres    false    203            �
           2606    16623    user_data user_data_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_pkey PRIMARY KEY (user_id);
 B   ALTER TABLE ONLY public.user_data DROP CONSTRAINT user_data_pkey;
       public            postgres    false    203            �
           2606    16625 !   user_data user_data_user_name_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.user_data
    ADD CONSTRAINT user_data_user_name_key UNIQUE (user_name);
 K   ALTER TABLE ONLY public.user_data DROP CONSTRAINT user_data_user_name_key;
       public            postgres    false    203            �
           2606    16642    links fk_linksuser_data    FK CONSTRAINT        ALTER TABLE ONLY public.links
    ADD CONSTRAINT fk_linksuser_data FOREIGN KEY (user_id) REFERENCES public.user_data(user_id);
 A   ALTER TABLE ONLY public.links DROP CONSTRAINT fk_linksuser_data;
       public          postgres    false    206    2728    203            �
           2606    16677 "   notification fk_notificationscript    FK CONSTRAINT     �   ALTER TABLE ONLY public.notification
    ADD CONSTRAINT fk_notificationscript FOREIGN KEY (script_id) REFERENCES public.script(script_id);
 L   ALTER TABLE ONLY public.notification DROP CONSTRAINT fk_notificationscript;
       public          postgres    false    2734    212    209            �
           2606    16661    script fk_scriptlinks    FK CONSTRAINT     y   ALTER TABLE ONLY public.script
    ADD CONSTRAINT fk_scriptlinks FOREIGN KEY (link_id) REFERENCES public.links(link_id);
 ?   ALTER TABLE ONLY public.script DROP CONSTRAINT fk_scriptlinks;
       public          postgres    false    206    209    2732           